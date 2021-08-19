import { WSAEHOSTUNREACH } from "constants";
import { report } from "process";
import { DeepPartial, EntityTarget, FindConditions, FindOneOptions, getConnection, getManager, getRepository, ObjectLiteral} from "typeorm";
import { EntityFieldsNames } from "typeorm/common/EntityFieldsNames";
import User from "../db/entity/User";
import { userRouter } from "../routers/userRouter";
import { comparePass } from "./auth";

type inputRecord = {
  account: string,
  password: string
}

export type UserRecord = {
  id: string
  createdDateTime: Date
  updatedDateTime: Date
  deletedDateTime: Date
  version: number
  account: string
  displayName: string
  password: string
}


export const findByField = <T>(model: EntityTarget<T>) =>
  async (account: string) => {
    const entityManager = getManager()
    const options: FindOneOptions = {}
    options.select = ['account', 'password']
    const user = await entityManager.findOneOrFail(model, account, options)
    console.log('hello')
    return user

    // const user = await getRepository(model)
    // .createQueryBuilder("user")
    // .where("user.account = :account", {account: account})
    // .addSelect("user.password")
    // .getOne()
    // if (user === null){
    //   throw new Error ('Cannot find user')
    // }
    // try {
    //   const passwordMatch = comparePass(password, user.password)
    // } catch (error) {
    // }
  }

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
// export const loginUsers = async (req: Request, res: Response) => {
//   const user = await getRepository(User)
//   .createQueryBuilder("user")
//   .where( "user.username = :username", {username: req.body.username})
//   .addSelect('user.passwordHash')
//   .getOne()
//   if (user == null) {
//     return res.status(400).send("Cannot find user")
//   }
//   try {
//     const passwordMatch = await comparePass(req.body.passwordHash, user.passwordHash)
//     if (passwordMatch) {
//       const accessToken = generateToken({...user})
//       res.status(200)
//       res.json({accessToken: accessToken})
//     } else {
//       res.status(401).send("Incorrect Email or Password")
//     }
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

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