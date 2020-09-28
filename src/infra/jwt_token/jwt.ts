import  { IToken, ISignInput } from '../../utils'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements IToken {
  sign(signInput: ISignInput) {
    const { id, email, secret_key } = signInput
    return jwt.sign({
      id,
      email
    }, secret_key)
  }
}