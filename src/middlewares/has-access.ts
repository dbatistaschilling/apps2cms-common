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

export const hasAccess = (roles?: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.jwt) {
      throw new NotAuthorizedError()
    }
  
    try {
      const payload = jwt.verify(
        req.session.jwt,
        process.env.JWT_KEY!
      ) as UserPayload
      req.currentUser = payload

      const user = await User.findOne({ email: req.currentUser.email })
      if (!user) {
        throw new NotAuthorizedError()
      }
      
      if (roles) {
        for (const role of roles) {
          if (!user.roles.includes(role)) {
            next(new NotAuthorizedError())
          }
        }
      }

      next()
    } catch (err) {
      res.send(err)
    }
  }
}