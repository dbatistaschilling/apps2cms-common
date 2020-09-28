import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { NotAuthorizedError } from '../errors'

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

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt) {
    throw new NotAuthorizedError()
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload
    req.currentUser = payload
  } catch (err) {}

  next()
}