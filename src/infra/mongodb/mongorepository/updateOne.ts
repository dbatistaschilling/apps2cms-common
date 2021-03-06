import { IUpdateOne } from "../../../utils/database/repository"

export class UpdateOneAdapter implements IUpdateOne {
  async updateOne (collectionName: string, collectionParams: Object, collectionUpdatedParams: Object): Promise<any> {
    const CollectionModel = (await import(`../../../models/${collectionName}`)).default
    return await CollectionModel.updateOne(collectionParams, collectionUpdatedParams)
  }
}
