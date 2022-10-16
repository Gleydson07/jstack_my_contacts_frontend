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

  async findContact(contactId){
    return this.httpClient.get(`/contacts/${contactId}`, {
      headers: {
        'Authorization': 'Token',
        'Auth': 'Auth2',
      }
    });
  }

  async createContact(contact){
    return this.httpClient.post(`/contacts`, {
      body: contact
    });
  }

  async editContact(contactId, contact){
    return this.httpClient.put(`/contacts/${contactId}`, {
      body: contact
    });
  }

  async deleteContact(contactId){
    return this.httpClient.delete(`/contacts/${contactId}`);
  }
}

export default new ContactsService();