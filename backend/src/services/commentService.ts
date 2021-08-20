import { createOne } from '../utils/createOne';
import { getAll } from '../utils/getAll';
import { getById } from '../utils/getById';
import Comment from '../db/entity/Comment';

export const getAllComments = getAll(Comment);

export const createComment = createOne(Comment);

export const getComment = getById(Comment);
