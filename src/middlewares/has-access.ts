import { Request, Response, NextFunction } from 'express'
import { NotAuthorizedError } from '../errors'
import jwt from 'jsonwebtoken'
import User from '../models/User'

type UserPayload = {
  id: string
  email: string
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload
    }
  }
}

export const hasAccess = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.jwt) {
      throw new NotAuthorizedError()
    }
  
    try {
      const payload = jwt.verify(
        req.session.jwt,
        process.env.JWT_KEY!
      ) as UserPayload
      req.currentUser = payload
      const user = User.findOne({ email: req.currentUser!.email })
      console.log(roles)
      console.log(user);
      next()
    } catch (err) {}

  }
}
