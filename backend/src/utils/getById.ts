import { EntityTarget, getManager } from 'typeorm';

// Given a db model, this function returns a function which allows you to find a single record of this model by id.
// params are the model that you want to find the record of
//ex.
// const getUserById = getById(User)
// const user = await getUserById(myId)

export const getById =
  <T>(model: EntityTarget<T>) =>
  // get the specified record by id
  async (id: string) => {
    // get access to the entity manager
    const entityManager = getManager();
    try {
      // pass the model you want and the id of the record you want
      return await entityManager.findOneOrFail(model, id);
    } catch (error) {
      throw new Error('The requested entity was not found.');
    }
  };

// *** I don't understand why you don't need to define a return type here?
