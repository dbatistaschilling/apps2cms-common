import { IDeleteMany } from '../../../utils'

export class DeleteManyAdapter implements IDeleteMany {
  async deleteMany (collectionName: string, collectionParams: Object): Promise<any> {
    const CollectionModel = (await import(`../../../models/${collectionName}`)).default
    return await CollectionModel.deleteMany(collectionParams)
  }
}
