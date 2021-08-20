// imports
import { EntityTarget, FindManyOptions, getManager } from 'typeorm';
import { EntityFieldsNames } from 'typeorm/common/EntityFieldsNames';
import { SortDirection } from '../types/sortDirection';

// Given a db model, this function returns a function which allows you to fetch all the records of a model
// params are the model you which the fetch the records from
// ex.
// const getAllUsers = getAll(User)
// const allUsers = await getAllUsers(User, 'createdAt', 'DESC')

// pass the function the model you would like to pull the records from
export const getAll =
  <T>(model: EntityTarget<T>) =>
  // pass the optional param of sortBy (which field of the entity you would like to sort by), and sortDirection.
  // define the return type as a promise object that contains items (an array), and total (the total number of results)
  async (
    sortBy?: EntityFieldsNames,
    sortDirection: SortDirection = 'DESC',
    // sortDirection cannot be defined as nullable because when we defined it the accetable values are 'ASC' | 'DESC'
  ): Promise<{ items: T[]; total: number }> => {
    // define the entity manager
    console.log();
    const entityManager = getManager();
    // define an options object (with the type FindManyOptions) to use the different typeORM findmany() query builder options
    const options: FindManyOptions = {};
    // if sortBy was passed...
    if (sortBy) {
      // options.order is defined as an empty object...
      // options.order{ sortBy: sortDirection }
      // ex. find({ order: { entityFieldName : 'DESC' }})
      options.order = {};
      options.order[sortBy] = sortDirection;
    }
    // define an array with items (the records found by the model passed, sorted by the options passed), the return of which has its promise object defined above.
    const [items, total] = await entityManager.findAndCount(model, options);

    return {
      items,
      total,
    };
  };
