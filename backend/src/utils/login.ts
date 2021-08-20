import { EntityTarget, FindOneOptions, getManager } from 'typeorm';
import { comparePass, generateToken } from './auth';

import { UserPostBody } from '../types/UserPostBody';

type inputRecord = {
  account: string;
  password: string;
};

export const login =
  <T>(model: EntityTarget<T>) =>
  // async <T>(inputRecord: {account: string, password: string}): Promise<T[]> => {
  async (inputRecord: inputRecord) => {
    // const account = inputRecord as unknown as T;
    const account = { account: inputRecord.account } as unknown as T;
    const entityManager = getManager();
    const options: FindOneOptions = {};
    options.select = ['account', 'password'];
    const user = await entityManager.findOneOrFail(model, account, options);
    if (user === null) {
      throw new Error('Cannot find user');
    }
    try {
      const passwordMatch = await comparePass(inputRecord.password, user.password);
      if (passwordMatch) {
        const accessToken = generateToken({ ...user });
        return { accessToken: accessToken };
      } else {
        throw new Error('Incorrect Account Name or Password');
      }
    } catch (error) {
      throw new Error(`An error occured while checking credentials: ${error}`);
    }
  };

// find One or Fail
// (method) EntityManager.findOneOrFail<T>(entityClass: EntityTarget<T>, id?: string | number | Date | ObjectID | undefined, options?: FindOneOptions<T> | undefined): Promise<...> (+2 overloads)

// get repo
// (alias) getRepository<T>(entityClass: EntityTarget<T>, connectionName?: string | undefined): Repository<T>
// import getRepository

// create q builder
// (method) Repository<T>.createQueryBuilder(alias?: string | undefined, queryRunner?: QueryRunner | undefined): SelectQueryBuilder<T>

// Where
// (method) SelectQueryBuilder<T>.where(where: string | Brackets | ObjectLiteral | ObjectLiteral[] | ((qb: SelectQueryBuilder<T>) => string), parameters?: ObjectLiteral | undefined): SelectQueryBuilder<...>

// addSelect
// (method) SelectQueryBuilder<T>.addSelect(selection: string, selectionAliasName?: string | undefined): SelectQueryBuilder<T> (+2 overloads)

// getOne
// (method) SelectQueryBuilder<T>.getOne(): Promise<T | undefined>

//   findOneOrFail<T extends Array<keyof Entity>>(id?: string | number | Date | ObjectID, options?: FindOneOptions<Entity> & { select: T }): Promise<Pick<Entity, T[number]>>;

// userRepository.find({ where: { firstName: "Timber", lastName: "Saw" } });

// const updateOfferedClass = async (code: string, offeredClass: OfferedClass): Promise<any> => {
//   if (typeof offeredClass.hours !== 'undefined') {
//     offeredClass.hours = normalizeNumber(offeredClass.hours, 'Bad number of hours');
//   }
//   if (!OfferedClassRepository.isOfferedClassUpdater(offeredClass)) {
//     throw new Error(`OfferedClass update id ${util.inspect(code)} did not receive a OfferedClass updater ${util.inspect(offeredClass)}`);
//   }
//   await this.manager.update(OfferedClass, code, offeredClass);
// return code;
// }

const example = { account: 'flapjack', password: '123456' };
