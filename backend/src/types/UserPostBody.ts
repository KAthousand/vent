import User from '../db/entity/User';

export type UserPostBody = Pick<User, 'account' | 'password'>;
