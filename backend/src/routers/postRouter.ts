// imports
import { doAsync } from "../utils/doAsync";
import { Router } from 'express';
import { body } from "express-validator";
import { getPost, getAllPosts, createPost } from "../services/postService";
import {Request} from 'express'

// define routes to manage posts

// Post:
//  properties:
//    account: type: string
//    displayName: type: string


// define the postRouter as an express router
export const postRouter = Router()

// GET all posts
// "/posts/"
// get:
//  description: fetches all Posts
//  tags: ['posts']
//  responses: 
//    200:
//      description: returns a list of all Posts
//      content:
//        'application/json':
//         schema:
//            type: object
//            properties:
//              items:
//              type: array
//              items:
//                $ref: '#/definitions/CreatedPost
//              total:
//                type: number

postRouter.get(
  // define the url (further defined in router config)
  '/', 
  // normal controller setup, use doAsync util, then use getAllPosts function
  async (req, res, next) => doAsync(req, res, next, getAllPosts()))

// GET one post by id
// "/posts/:id"
// get:
//  description: fetches one Posts
//  tags: ['posts']
//  responses: 
//    200:
//      description: returns one Post
//      content:
//        'application/json':
//         schema:
//            type: object
//            properties:
//             $ref: '#/definitions/CreatedPost

postRouter.get(
  // define the url (further defined in router config)
  '/:id',
    // normal controller setup, use doAsync util, then use getPost function passing the body.id param
  async (req,res,next) => doAsync(req, res, next, getPost(req.body.id))
)

// Post one record to posts model
// "/posts/"
// post:
//  description: fetches one Posts
//  tags: ['posts']
//  responses: 
//    200:
//      description: returns newly created Post
//      content:
//        'application/json':
//         schema:
//            type: object
//            properties:
//             $ref: '#/definitions/CreatedPost

postRouter.post(
  // define the url (further defined in router config)
  '/',
  // use extremely basic express-validation to make sure req fields are not empty.
  
  // body('account').notEmpty(),
  // body('displayName').notEmpty(),
  // body('password').notEmpty(),

  // normal controller setup, use doAsync util, then use createPost function with express-validated body.
  (req, res, next) => doAsync(req, res, next, createPost(req.body))
)

