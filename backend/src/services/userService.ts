import { createOne } from "../utils/createOne";
import { getAll } from "../utils/getAll";
import { getById } from "../utils/getById";
import User from "../db/entity/User";

export const getAllUsers = getAll(User)

export const createUser = createOne(User)

export const getUser = getById(User)
