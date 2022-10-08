import { backendBaseUrl } from './api';
import HttpClient from './utils'

class CategoriesService {
  constructor(){
    this.httpClient = new HttpClient(backendBaseUrl);
  }

  async listCategories(orderBy = 'asc'){
    return this.httpClient.get(`/Categories?orderBy=${orderBy ? 'ASC' : 'DESC'}`)
  }
}

export default new CategoriesService();