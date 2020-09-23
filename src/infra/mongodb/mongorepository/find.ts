import { IFind } from '../../../utils'

export class FindAdapter implements IFind {
  async find (collectionName: string, collectionParams: Object, returnFilters: Object): Promise<any> {
    const CollectionModel = (await import(`../../../models/${collectionName}`)).default
    return await CollectionModel.find(collectionParams, returnFilters, { autopopulate: true })
  }
}
