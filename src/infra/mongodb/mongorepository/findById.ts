import { IFindById } from "../../../utils/database/repository"

export class FindByIdAdapter implements IFindById {
  async findById (collectionName: string, id: string): Promise<any> {
    const CollectionModel = (await import(`../../../models/${collectionName}`)).default
    return await CollectionModel.findById(id)
  }
}
