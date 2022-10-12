import React from 'react';
import ContactService from '../../services/ContactsService';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

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
    } catch (error) {
      const event = new CustomEvent('addtoast', {
        detail: {
          type: 'error',
          text: 'Ocorreu um erro ao cadastrar contato!'
        }
      });

      document.dispatchEvent(event);
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
