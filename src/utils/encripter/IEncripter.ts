export interface ICompareInput {
  storedPassword: string
  suppliedPassword: string
}

export interface IEncripter {
  toHash: (password: string) => Promise<string>
  compare: (dcryptData: ICompareInput) => Promise<boolean>
}
