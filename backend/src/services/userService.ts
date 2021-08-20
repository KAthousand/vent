import { getAll } from '../utils/getAll';
import { getById } from '../utils/getById';
import { register } from '../utils/register';
import { login } from '../utils/login';
import User from '../db/entity/User';

export const getAllUsers = getAll(User);

export const getUser = getById(User);

export const loginUser = login(User);

export const registerUser = register(User);
