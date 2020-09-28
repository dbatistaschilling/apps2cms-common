import { IController, IHttpRequest } from '../../protocols'
import { NextFunction, Request, Response } from 'express'

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: IHttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode < 300) {
      if (httpResponse.body.jwt) {
        req.session = {
          jwt: httpResponse.body.jwt
        }
        delete httpResponse.body.jwt
      }
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      next(httpResponse)
    }
  }
}
