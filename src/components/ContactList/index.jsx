import React, { useState } from 'React';
import { ContactCard } from '../ContactCard';

import arrowSvg from '../../assets/images/arrow.svg';

import {
  Link,
  Container,
  Header, 
  Title,
  Body
} from './styles';

const initContacts = [
  {
    name: 'Gleydson Albuquerque',
    socialMedia: 'link',
    email: 'gsantos@gmail.com',
    phone: '(82) 98111-4246'
  },
  {
    name: 'Gleydson Albuquerque',
    socialMedia: 'link',
    email: 'gsantos@gmail.com',
    phone: '(82) 98111-4246'
  },
  {
    name: 'Gleydson Albuquerque',
    socialMedia: 'link',
    email: 'gsantos@gmail.com',
    phone: '(82) 98111-4246'
  },
]

export const ContactList = () => {
  const [contacts, setContacts] = useState(initContacts);

  return (
    <Container>
      <Header>
        <Title>{contacts.length} contatos</Title>
        <Link href="/">Novo contato</Link>
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
            key={contact.email}
            contact={contact}
          />
        ))}
      </Body>
    </Container>
  )
}
