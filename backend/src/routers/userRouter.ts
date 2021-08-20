// imports
import { doAsync } from '../utils/doAsync';
import { Router } from 'express';
import { body } from 'express-validator';
import { getUser, getAllUsers, registerUser, loginUser } from '../services/userService';
import { Request } from 'express';
import { SortDirection } from '../types/sortDirection';
import { EntityFieldsNames } from 'typeorm/common/EntityFieldsNames';

// define routes to manage users

// User:
//  properties:
//    account: type: string
//    displayName: type: string

// define the userRouter as an express router
export const userRouter = Router();

// GET all users
// "/users/"
// get:
//  description: fetches all Users
//  tags: ['users']
//  responses:
//    200:
//      description: returns a list of all Users
//      content:
//        'application/json':
//         schema:
//            type: object
//            properties:
//              items:
//              type: array
//              items:
//                $ref: '#/definitions/CreatedUser
//              total:
//                type: number

userRouter.get(
  // define the url (further defined in router config)
  '/',
  // normal controller setup, use doAsync util, then use getAllUsers function
  async (req, res, next) =>
    doAsync(req, res, next, getAllUsers(<EntityFieldsNames>req.query.sortBy, <SortDirection>req.query.sortDirection)),
);

// GET one user by id
// "/users/:id"
// get:
//  description: fetches one Users
//  tags: ['users']
//  responses:
//    200:
//      description: returns one User
//      content:
//        'application/json':
//         schema:
//            type: object
//            properties:
//             $ref: '#/definitions/CreatedUser

userRouter.get(
  // define the url (further defined in router config)
  '/:id',
  // normal controller setup, use doAsync util, then use getUser function passing the body.id param
  async (req, res, next) => doAsync(req, res, next, getUser(req.body.id)),
);

// Post one record to users model
// "/users/"
// post:
//  description: fetches one Users
//  tags: ['users']
//  responses:
//    200:
//      description: returns newly created User
//      content:
//        'application/json':
//         schema:
//            type: object
//            properties:
//             $ref: '#/definitions/CreatedUser

userRouter.post(
  // define the url (further defined in router config)
  '/',
  // use extremely basic express-validation to make sure req fields are not empty.

  // body('account').notEmpty(),
  // body('displayName').notEmpty(),
  // body('password').notEmpty(),

  // normal controller setup, use doAsync util, then use createUser function with express-validated body.
  (req, res, next) => doAsync(req, res, next, registerUser(req.body)),
);

// http://localhost:8082/users?sortBy=createdDateTime&sortDirection=DESC

userRouter.post('/login', (req, res, next) => doAsync(req, res, next, loginUser(req.body)));
