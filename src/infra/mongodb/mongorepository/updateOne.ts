import { IUpdateOne } from '../../../utils'

export class UpdateOneAdapter implements IUpdateOne {
  async updateOne (collectionName: string, collectionParams: Object, collectionUpdatedParams: Object): Promise<any> {
    const CollectionModel = (await import(`../../../models/${collectionName}`)).default
    return await CollectionModel.updateOne(collectionParams, collectionUpdatedParams)
  }
}
