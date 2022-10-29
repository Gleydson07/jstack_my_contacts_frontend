import React from 'react';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import { useController } from './useController';

import {
  Container
} from './styles';

export const NewContact = () => {
  const {
    contactFormRef,
    handleCreateContact
  } = useController();

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
