import { IUpdateMany } from "../../../utils/database/repository"

export class UpdateManyAdapter implements IUpdateMany {
  async updateMany (collectionName: string, collectionParams: Object, collectionUpdatedParams: Object): Promise<any> {
    const CollectionModel = (await import(`../../../models/${collectionName}`)).default
    return await CollectionModel.updateMany(collectionParams, collectionUpdatedParams)
  }
}
