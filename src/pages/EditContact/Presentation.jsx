import React, {  } from 'react';
import { ContactForm } from '../../components/ContactForm';
import { Loader } from '../../components/Loader';
import { PageHeader } from '../../components/PageHeader';

import {
  Container
} from './styles';

export const Presentation = ({
  isLoading,
  contactName,
  contactFormRef,
  onSubmit
}) => {
  return (
    <Container>
      <Loader isLoading={isLoading}/>
      <PageHeader 
        link="/" 
        title={
          !isLoading ? 
          `Editar ${contactName}` : 
          'Carregando...'
        }
      />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={onSubmit}
      />
    </Container>
  )
}
