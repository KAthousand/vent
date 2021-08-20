// imports
import { doAsync } from '../utils/doAsync';
import { Router } from 'express';
import { body } from 'express-validator';
import { getComment, getAllComments, createComment } from '../services/commentService';
import { Request } from 'express';

// define routes to manage comments

// Comment:
//  properties:
//    account: type: string
//    displayName: type: string

// define the commentRouter as an express router
export const commentRouter = Router();

// GET all comments
// "/comments/"
// get:
//  description: fetches all Comments
//  tags: ['comments']
//  responses:
//    200:
//      description: returns a list of all Comments
//      content:
//        'application/json':
//         schema:
//            type: object
//            properties:
//              items:
//              type: array
//              items:
//                $ref: '#/definitions/CreatedComment
//              total:
//                type: number

commentRouter.get(
  // define the url (further defined in router config)
  '/',
  // normal controller setup, use doAsync util, then use getAllComments function
  async (req, res, next) => doAsync(req, res, next, getAllComments()),
);

// GET one comment by id
// "/comments/:id"
// get:
//  description: fetches one Comments
//  tags: ['comments']
//  responses:
//    200:
//      description: returns one Comment
//      content:
//        'application/json':
//         schema:
//            type: object
//            properties:
//             $ref: '#/definitions/CreatedComment

commentRouter.get(
  // define the url (further defined in router config)
  '/:id',
  // normal controller setup, use doAsync util, then use getComment function passing the body.id param
  async (req, res, next) => doAsync(req, res, next, getComment(req.body.id)),
);

// Comment one record to comments model
// "/comments/"
// comment:
//  description: fetches one Comments
//  tags: ['comments']
//  responses:
//    200:
//      description: returns newly created Comment
//      content:
//        'application/json':
//         schema:
//            type: object
//            properties:
//             $ref: '#/definitions/CreatedComment

commentRouter.post(
  // define the url (further defined in router config)
  '/',
  // use extremely basic express-validation to make sure req fields are not empty.

  // body('account').notEmpty(),
  // body('displayName').notEmpty(),
  // body('password').notEmpty(),

  // normal controller setup, use doAsync util, then use createComment function with express-validated body.
  (req, res, next) => doAsync(req, res, next, createComment(req.body)),
);
