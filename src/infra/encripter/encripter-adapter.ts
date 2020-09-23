import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'
import { IEncripter, IEncripterInput } from '../../utils/encripter/IEncripter'

const scryptAsync = promisify(scrypt)

export class Encripter implements IEncripter {

  static async toHash(password: string): Promise<string> {
    const salt = randomBytes(8).toString('hex')
    const buf = (await scryptAsync(password, salt, 64)) as Buffer

    return `${buf.toString('hex')}.${salt}`
  }

  static async compare(encripterInput: IEncripterInput): Promise<boolean> {
    const [hashedPassword, salt] = encripterInput.storedPassword.split('.')
    const buf = (await scryptAsync(encripterInput.supliedPassword, salt, 64)) as Buffer

    return buf.toString('hex') === hashedPassword
  }

  async toHash(password: string): Promise<string> {
    return await Encripter.toHash(password)
  }

  async compare (encripterInput: IEncripterInput): Promise<boolean> {
    return await Encripter.compare(encripterInput)
  }

}