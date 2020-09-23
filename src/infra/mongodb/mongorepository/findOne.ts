import { IFindOne } from '../../../utils'

export class FindOneAdapter implements IFindOne {
  async findOne (collectionName: string, collectionParams: Object): Promise<any> {
    const CollectionModel = (await import(`../../../models/${collectionName}`)).default
    return await CollectionModel.findOne(collectionParams)
  }
}
