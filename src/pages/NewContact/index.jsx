import React from 'react';
import ContactService from '../../services/ContactsService';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import toast from '../../utils/toast';

import {
  Container
} from './styles';

export const NewContact = () => {
  const handleCreateContact = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId
      }
      await ContactService.createContact(contact);
      toast('success', 'Contato salvo com sucesso!', 5000);
    } catch (error) {
      toast('error', 'Ocorreu um erro ao tentar salvar contato!', 5000);
    }
  }

  return (
    <Container>
      <PageHeader link="/" title="Novo contato"/>

      <ContactForm 
        buttonLabel="Cadastrar"
        onSubmit={handleCreateContact}
      />
    </Container>
  )
}
