import { IHttpResponse } from "../protocols"

export const successRes = (data: any): IHttpResponse => ({
  statusCode: 200,
  body: data
})

export const newDataRes = (data: any): IHttpResponse => ({
  statusCode: 201,
  body: data
})