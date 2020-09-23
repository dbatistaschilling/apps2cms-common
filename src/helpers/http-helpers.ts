import { IHttpResponse } from "../protocols";

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  body: data
})

export const created = (data: any): IHttpResponse => ({
  statusCode: 201,
  body: data
})