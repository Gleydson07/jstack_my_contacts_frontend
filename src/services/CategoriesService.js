import { backendBaseUrl } from './api';
import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils'

class CategoriesService {
  constructor(){
    this.httpClient = new HttpClient(backendBaseUrl);
  }

  async listCategories(orderBy = 'asc'){
    const categories = await this.httpClient.get(`/Categories?orderBy=${orderBy ? 'ASC' : 'DESC'}`);

    return categories.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();