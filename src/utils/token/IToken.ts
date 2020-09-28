export type ISignInput = {
  id: string
  email: string
  secretKey: string
}

export interface IToken {
  sign(signInput: ISignInput): string
}