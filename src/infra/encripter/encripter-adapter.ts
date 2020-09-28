import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'
import { IEncripter, ICompareInput } from '../../utils/encripter/IEncripter'

const scryptAsync = promisify(scrypt)

export class Encripter implements IEncripter {

  async toHash(password: string): Promise<string> {
    const salt = randomBytes(8).toString('hex')
    const buf = (await scryptAsync(password, salt, 64)) as Buffer

    return `${buf.toString('hex')}.${salt}`
  }

  async compare(encripterInput: ICompareInput): Promise<boolean> {
    const [hashedPassword, salt] = encripterInput.storedPassword.split('.')
    const buf = (await scryptAsync(encripterInput.suppliedPassword, salt, 64)) as Buffer

    return buf.toString('hex') === hashedPassword
  }

}