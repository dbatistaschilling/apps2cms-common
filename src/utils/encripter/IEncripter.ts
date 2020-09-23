export interface IEncripterInput {
  storedPassword: string
  supliedPassword: string
}

export interface IEncripter {
  toHash: (password: string) => Promise<string>
  compare: (dcryptData: IEncripterInput) => Promise<boolean>
}
