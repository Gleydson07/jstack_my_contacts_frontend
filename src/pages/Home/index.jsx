import React, { useEffect, useMemo, useState } from 'react';
import { useCallback } from 'react';
import { ContactList } from '../../components/ContactList';
import { Loader } from '../../components/Loader';
import { Modal } from '../../components/Modal';
import toast from '../../utils/toast';
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
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [deleteContact, setDeleteContact] = useState('');

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

  const handleOpenModal = (contact) => {
    setDeleteContact(contact);
    setDeleteModalIsOpen(true);
  }

  const handleCloseDeleteModal = () => {
    setDeleteModalIsOpen(false);
  }

  const handleDeleteContact = async () => {
    setIsLoadingDelete(true);
    try {
      await ContactsService.deleteContact(deleteContact.id);
      loadContacts();
      toast('success', 'Contato removido com succeso!');
    } catch (error) {
      toast('error', 'Falha ao remover contato selecionado!');
    } finally {
      handleCloseDeleteModal();
      setDeleteContact('');
      setIsLoadingDelete(false);
    }
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
      {deleteModalIsOpen && 
        <Modal
          title={`Tem certeza que deseja remover o contato "${deleteContact?.name}" ?`}
          confirmLabel="Deletar"
          isLoading={isLoadingDelete}
          onCancel={handleCloseDeleteModal}
          onConfirm={handleDeleteContact}
          danger
        >
          <p>Esta ação não poderá ser desfeita!</p>
        </Modal>
      }

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
        isLoading={isLoading}
        search={searchTerm}
        handleTryAgain={loadContacts}
        toggleOrder={handleToggleContactOrder}
        onDelete={handleOpenModal}
      />
    </Container>
  )
}
