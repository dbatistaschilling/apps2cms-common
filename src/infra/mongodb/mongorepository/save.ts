import { ISave } from "../../../utils/database/repository"

export class SaveAdapter implements ISave {
  async save (collectionName: string, collectionParams: Object): Promise<any> {
    const CollectionModel = (await import(`../../../models/${collectionName}`)).default
    const newCollection = CollectionModel.build(collectionParams)
    return await newCollection.save()
  }
}
