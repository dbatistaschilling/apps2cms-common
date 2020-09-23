import { IDeleteOne } from '../../../utils'

export class DeleteOne implements IDeleteOne {
  async deleteOne (collectionName: string, collectionParams: Object): Promise<any> {
    const CollectionModel = (await import(`../../../models/${collectionName}`)).default
    return await CollectionModel.deleteOne(collectionParams)
  }
}
