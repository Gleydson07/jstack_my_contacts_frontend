import React, { useEffect, useState } from 'react';
import { ContactList } from '../../components/ContactList';

import {
  Container,  
  InputSearchContainer
} from './styles';

export const Home = () => {
  const [contacts, setContacts] = useState([]);

  const loadContacts = () => {
    fetch('http://localhost:3001/contacts')
    .then(async response => {
      const json = await response.json();
      setContacts(json);
    })
    .catch((error) => {
      HTMLFormControlsCollection.log('error: ', error)
    })
  }

  useEffect(() => {
    loadContacts();
  }, [])

  return (
    <Container>
      <InputSearchContainer>
        <input  placeholder='Pesquisar pelo nome...'/>
      </InputSearchContainer>
      <ContactList contacts={contacts}/>
    </Container>
  )
}
