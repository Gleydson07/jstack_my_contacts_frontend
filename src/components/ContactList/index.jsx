import React from 'react';
import { ContactCard } from '../ContactCard';

import arrowSvg from '../../assets/images/arrow.svg';

import {
  Link,
  Container,
  Header, 
  Title,
  Body
} from './styles';

export const ContactList = ({contacts, toggleOrder, order}) => {
  return (
    <Container>
      <Header>
        <Title>
          {contacts.length} 
          {contacts.length === 1 ? " contato" : " contatos"}
        </Title> 
        <Link to="/new">Novo contato</Link>
      </Header>

      <Body orderBy={order}>
        {contacts.length ? <header>
          <button 
            type='button' 
            className='sort-button'
            onClick={toggleOrder}
          >
            <span>Nome</span>
            <img src={arrowSvg} alt="seta" />
          </button>
        </header> : ''} 

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
