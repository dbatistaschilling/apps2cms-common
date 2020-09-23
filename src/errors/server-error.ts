import { CustomError } from "./custom-error"

export class ServerError extends CustomError {
  statusCode = 500
  reason = 'Server Error'

  constructor (public message: string) {
    super('Server Error')
    Object.setPrototypeOf(this, ServerError.prototype)
  }

  serializeErrors() {
    return [{ message: this.reason }]
  }
}