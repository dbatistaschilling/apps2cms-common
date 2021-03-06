import mongoose from 'mongoose'
import { IDatabase } from '../../utils'

class DatabaseConnectionAdapter implements IDatabase {
  async connect (uri: string): Promise<any> {
    return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  }

  async disconnect (): Promise<void> {
    return await mongoose.disconnect()
  }
}

export const mongoDbConnection = new DatabaseConnectionAdapter()
