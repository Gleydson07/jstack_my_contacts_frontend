import React, {  } from 'react';
import { ContactList } from '../../components/ContactList';
import { Loader } from '../../components/Loader';
import { Modal } from '../../components/Modal';

import {
  Container,  
  InputSearchContainer
} from './styles';
import { useController } from './useController';

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
