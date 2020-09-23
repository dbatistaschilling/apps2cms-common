import { IFind } from "../../../utils/database/repository"

export class FindAdapter implements IFind {
  async find (collectionName: string, collectionParams: Object, returnFilters: Object): Promise<any> {
    const CollectionModel = (await import(`./schemas/${collectionName}Schema`)).default
    return await CollectionModel.find(collectionParams, returnFilters, { autopopulate: true })
  }
}
