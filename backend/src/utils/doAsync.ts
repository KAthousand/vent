// A convenience funciton that takes the given promise and executes it within a try/catch block,
// calling res.json if it succeeds and next(error) if it fails. This allows us to call async
// functions within express routes cleanly, since express doesn't support returning promises directly.

// import types from express
import { NextFunction, Request, Response } from "express";

// function takes req, res, next, promise as params for using as controller with routes. 
// returns either json or moves onto error
//ex.
// router.get('/', (req: ValidatedPaginationRequest, res, next)=> {
  // doAsync(req, res, next, getAllUsers())
// })


export async function doAsync<T>(
  req: Request,
  res: Response,
  next: NextFunction,
  promise: Promise<T>
) {
  try {
    const result = await promise
    res.json(result)
  } catch (error) {
    return next(error)
  }
}


