import React from 'React';
import { ContactList } from '../ContactList';
import {Header} from '../Header';

import {
  Container
} from './styles';

export const Layout = () => {

  return (
    <Container>
      <Header/>
      <ContactList/>
    </Container>
  )
}
