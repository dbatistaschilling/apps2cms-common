import { Request, Response, NextFunction } from 'express'
import { NotAuthorizedError } from '../errors'

export const hasAccess = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.currentUser)
  // const { user, role } = req.body
  // try {
  //   if (user.role !== role) {
  //     throw new NotAuthorizedError()
  //   }
  // } catch (err) {}

  next()
}
