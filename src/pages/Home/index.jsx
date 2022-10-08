import React, { useEffect, useMemo, useState } from 'react';
import { useCallback } from 'react';
import { ContactList } from '../../components/ContactList';
import { Loader } from '../../components/Loader';
import ContactsService from '../../services/ContactsService';

import {
  Container,  
  InputSearchContainer
} from './styles';

export const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [contactsOrder, serContactsOrder] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await ContactsService.listContacts(contactsOrder);
      
      setHasError(false);
      setContacts(data);
    } catch (error) {
      setHasError(true);
    }finally{
      setIsLoading(false);
    }
  }, [contactsOrder])

  const handleToggleContactOrder = () => {
    serContactsOrder((prevState) => !prevState);
  }

  const handleChangeSearchTerm = e => setSearchTerm(e.target.value);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    //Buscar palavras que começam com o parâmetro informado
    // contact.name.toUpperCase().startsWith(searchTerm.toUpperCase())
    contact.name.toUpperCase().includes(searchTerm.toUpperCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    loadContacts();
  }, [contactsOrder])

  return (
    <Container>
      <Loader isLoading={isLoading}/>
      {!hasError && <InputSearchContainer>
        <input  
          type="text"
          placeholder='Pesquisar pelo nome...'
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>}
      <ContactList 
        contacts={contacts}
        filteredContacts={filteredContacts}
        order={contactsOrder}
        hasError={hasError}
        handleTryAgain={loadContacts}
        toggleOrder={handleToggleContactOrder}
        isLoading={isLoading}
      />
    </Container>
  )
}
