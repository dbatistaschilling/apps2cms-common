import { IFindOne } from "../../../utils/database/repository"

export class FindOneAdapter implements IFindOne {
  async findOne (collectionName: string, collectionParams: Object): Promise<any> {
    const CollectionModel = (await import(`./schemas/${collectionName}Schema`)).default
    return await CollectionModel.findOne(collectionParams)
  }
}
