import { EntityTarget, getManager } from 'typeorm';
import { hashPassword } from './auth';

type UserRecord = {
  account: string;
  displayName: string;
  password: string;
};

export const register =
  <T>(model: EntityTarget<T>) =>
  // save new record for this model, define the return type as a promise
  async (newRecord: UserRecord): Promise<T> => {
    console.log(newRecord);
    const hashedPassword = await hashPassword(newRecord.password);
    newRecord.password = hashedPassword;
    const newAccount = newRecord as unknown as T;
    // define the entity manager
    const entityManager = getManager();
    // try catch to save the new record onto the model
    try {
      return entityManager.save(model, newAccount);
    } catch (error) {
      throw new Error('The requested entity was not found.');
    }
  };
