import { createOne } from '../utils/createOne';
import { getAll } from '../utils/getAll';
import { getById } from '../utils/getById';
import Post from '../db/entity/Post';

export const getAllPosts = getAll(Post);

export const createPost = createOne(Post);

export const getPost = getById(Post);
