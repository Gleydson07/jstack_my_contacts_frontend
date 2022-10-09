import { backendBaseUrl } from './api';
import HttpClient from './utils'

class ContactsService {
  constructor(){
    this.httpClient = new HttpClient(backendBaseUrl);
  }

  async listContacts(orderBy = 'asc'){
    return this.httpClient.get(`/contacts?orderBy=${orderBy ? 'ASC' : 'DESC'}`);
  }

  async createContact(contact){
    return this.httpClient.post(`/contacts`, contact);
  }
}

export default new ContactsService();