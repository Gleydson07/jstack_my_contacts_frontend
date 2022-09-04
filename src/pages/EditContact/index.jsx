import React from 'react';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

import {
  Container
} from './styles';

export const EditContact = ({contact = {name: 'Gleydson Albuquerque'}}) => {

  return (
    <Container>
      <PageHeader link="/" title={`Editar ${contact.name}`}/>

      <ContactForm 
        buttonLabel="Salvar alterações"
      />
    </Container>
  )
}
