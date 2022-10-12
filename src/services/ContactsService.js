import { backendBaseUrl } from './api';
import HttpClient from './utils'

class ContactsService {
  constructor(){
    this.httpClient = new HttpClient(backendBaseUrl);
  }

  async listContacts(orderBy = 'asc'){
    return this.httpClient.get(`/contacts?orderBy=${orderBy ? 'ASC' : 'DESC'}`, {
      headers: {
        'Authorization': 'Token',
        'Auth': 'Auth2',
      }
    });
  }

  async createContact(contact){
    return this.httpClient.post(`/contacts/5354545455445`, {
      body: contact
    });
  }
}

export default new ContactsService();