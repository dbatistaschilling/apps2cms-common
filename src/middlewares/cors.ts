import { Request, Response, NextFunction } from 'express'
import cors from 'cors'

const corsConfig = (req: Request, res: Response, next: NextFunction): void => {
  // res.set('access-control-allow-origin', '*')
  // res.set('access-control-allow-methods', '*')
  // res.set('access-control-allow-headers', '*')
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next()
}

export { cors, corsConfig }