import { Request, Response, NextFunction } from 'express'
import favicon from 'serve-favicon'
import path from 'path'

export const appIcon = (req: Request, res: Response, next: NextFunction) => {
  favicon(path.join(__dirname, 'public', 'favicon.ico'))
  next()
}