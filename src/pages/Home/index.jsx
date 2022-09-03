import React from 'react';
import { ContactList } from '../../components/ContactList';

import {
  Container,  
  InputSearchContainer
} from './styles';

export const Home = () => {

  return (
    <Container>
      <InputSearchContainer>
        <input  placeholder='Pesquisar pelo nome...'/>
      </InputSearchContainer>
      <ContactList/>
    </Container>
  )
}
