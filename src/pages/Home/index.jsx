import React, {  } from 'react';
import { ContactList } from '../../components/ContactList';
import { Loader } from '../../components/Loader';
import { Modal } from '../../components/Modal';
import { useController } from './useController';

import { InputSearch } from './Components/InputSearch';
import { Header } from './Components/Header';

import {
  Container
} from './styles';

export const Home = () => {
  const {
    contacts,
    contactsOrder,
    searchTerm,
    isLoading,
    isLoadingDelete,
    hasError,
    deleteModalIsOpen,
    deleteContact,
    filteredContacts,
    loadContacts,
    handleToggleContactOrder,
    handleOpenModal,
    handleCloseDeleteModal,
    handleDeleteContact,
    handleChangeSearchTerm
  } = useController();
  return (
    <Container>
      <Loader isLoading={isLoading}/>

      {!hasError && 
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      }

      <Header
        hasError={hasError}
        hasContacts={!!contacts.length}
        filteredContactsSize={filteredContacts.length}
      />

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

      <Modal
        title={`Tem certeza que deseja remover o contato "${deleteContact?.name}" ?`}
        confirmLabel="Deletar"
        isLoading={isLoadingDelete}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleDeleteContact}
        isOpen={deleteModalIsOpen}
        danger
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>
    </Container>
  )
}
