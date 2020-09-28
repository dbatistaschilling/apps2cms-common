export type ISignInput = {
  id: string
  email: string
  secret_key: string
}

export interface IToken {
  sign(signInput: ISignInput): string
}