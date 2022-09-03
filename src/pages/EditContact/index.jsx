import React from 'react';
import { PageHeader } from '../../components/PageHeader';

import {
  Container
} from './styles';

export const EditContact = ({contact = {name: 'Gleydson Albuquerque'}}) => {

  return (
    <Container>
      <PageHeader link="/" title={`Editar ${contact.name}`}/>
    </Container>
  )
}
