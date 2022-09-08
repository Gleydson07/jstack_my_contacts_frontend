import React, { useEffect, useState } from 'react';
import { ContactList } from '../../components/ContactList';

import {
  Container,  
  InputSearchContainer
} from './styles';

export const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [contactsOrder, serContactsOrder] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const loadContacts = () => {
    fetch(`http://localhost:3001/contacts?orderBy=${contactsOrder ? 'ASC' : 'DESC'}`)
    .then(async response => {
      const json = await response.json();
      setContacts(json);
    })
    .catch((error) => {
      HTMLFormControlsCollection.log('error: ', error)
    })
  }

  const handleToggleContactOrder = () => {
    serContactsOrder((prevState) => !prevState);
  }

  const handleChangeSearchTerm = e => setSearchTerm(e.target.value);

  const filteredContacts = contacts.filter((contact) => (
    //Buscar palavras que começam com o parâmetro informado
    // contact.name.toUpperCase().startsWith(searchTerm.toUpperCase())
    contact.name.toUpperCase().includes(searchTerm.toUpperCase())
  ));

  useEffect(() => {
    loadContacts(contactsOrder);
  }, [contactsOrder])

  return (
    <Container>
      <InputSearchContainer>
        <input  
          type="text"
          placeholder='Pesquisar pelo nome...'
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>
      <ContactList 
        contacts={filteredContacts}
        order={contactsOrder}
        toggleOrder={handleToggleContactOrder}
      />
    </Container>
  )
}
