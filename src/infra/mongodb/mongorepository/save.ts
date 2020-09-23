import { ISave } from '../../../utils'

export class SaveAdapter implements ISave {
  async save (collectionName: string, collectionParams: Object): Promise<any> {
    const CollectionModel = (await import(`../../../models/${collectionName}`)).default
    const newCollection = new CollectionModel(collectionParams)
    return await newCollection.save()
  }
}
