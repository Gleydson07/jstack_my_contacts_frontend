import React, { useRef } from 'react';
import ContactService from '../../services/ContactsService';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import toast from '../../utils/toast';

import {
  Container
} from './styles';
import ContactMapper from '../../services/mappers/ContactMapper';

export const NewContact = () => {
  const contactFormRef = useRef(null);

  const handleCreateContact = async (contact) => {
    try {
      await ContactService.createContact(contact);
      contactFormRef.current.resetFields();
      toast('success', 'Contato salvo com sucesso!', 5000);
    } catch (error) {
      toast('error', 'Ocorreu um erro ao tentar salvar contato!', 5000);
    }
  }

  return (
    <Container>
      <PageHeader link="/" title="Novo contato"/>

      <ContactForm 
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleCreateContact}
      />
    </Container>
  )
}
