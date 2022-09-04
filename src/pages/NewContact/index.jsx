import React from 'react';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

import {
  Container
} from './styles';

export const NewContact = () => {

  return (
    <Container>
      <PageHeader link="/" title="Novo contato"/>

      <ContactForm 
        buttonLabel="Cadastrar"
      />
    </Container>
  )
}
