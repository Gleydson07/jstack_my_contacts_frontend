import { backendBaseUrl } from './api';
import ContactMapper from './mappers/ContactMapper';
import HttpClient from './utils'

class ContactsService {
  constructor(){
    this.httpClient = new HttpClient(backendBaseUrl);
  }

  async listContacts(orderBy = 'asc'){
    const contacts = await this.httpClient.get(`/contacts?orderBy=${orderBy ? 'ASC' : 'DESC'}`, {
      headers: {
        'Authorization': 'Token',
        'Auth': 'Auth2',
      }
    });

    // O retorno abaixo é o mesmo que:
    // return contacts.map((item) => ContactMapper.toDomain(item));
    return contacts.map(ContactMapper.toDomain);
  }

  async findContact(contactId){
    const contact = await this.httpClient.get(`/contacts/${contactId}`, {
      headers: {
        'Authorization': 'Token',
        'Auth': 'Auth2',
      }
    });

    return ContactMapper.toDomain(contact);
  }

  async createContact(contact){
    return this.httpClient.post(`/contacts`, {
      body: ContactMapper.toPersistence(contact)
    });
  }

  async editContact(contactId, contact){
    return this.httpClient.put(`/contacts/${contactId}`, {
      body: ContactMapper.toPersistence(contact)
    });
  }

  async deleteContact(contactId){
    return this.httpClient.delete(`/contacts/${contactId}`);
  }
}

export default new ContactsService();