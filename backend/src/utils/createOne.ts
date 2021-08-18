import { EntityTarget, getManager } from "typeorm";

// Given a db model, this function returns a function which allows you to save a new record of this model
// params are the model you are trying to save the record to.
// ex.
// const createUser = createOne(User)
// const newUser = await createUser({...}) 

export const createOne = <T>(model: EntityTarget<T>) =>
    // save new record for this model, define the return type as a promise
    async (newRecord: T): Promise<T> => {
      // define the entity manager
      const entityManager = getManager()
      // try catch to save the new record onto the model
      try {
        return entityManager.save(model, newRecord)
      } catch (error) {
        throw new Error('The requested entity was not found.')
      }
    }