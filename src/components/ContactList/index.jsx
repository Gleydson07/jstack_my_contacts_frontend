import React, { useState } from 'react';
import { ContactCard } from '../ContactCard';

import arrowSvg from '../../assets/images/arrow.svg';

import {
  Link,
  Container,
  Header, 
  Title,
  Body
} from './styles';

export const ContactList = ({contacts}) => {
  return (
    <Container>
      <Header>
        <Title>{contacts.length} contatos</Title>
        <Link to="/new">Novo contato</Link>
      </Header>

      <Body>
        <header>
          <button type='button' className='sort-button'>
            <span>Nome</span>
            <img src={arrowSvg} alt="seta" />
          </button>
        </header> 

        {contacts && contacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
          />
        ))}
      </Body>
    </Container>
  )
}
