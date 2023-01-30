import React from 'react';

import {
  Container, 
  Link, 
  Title
} from './styles';

export const Header = ({
  hasError,
  hasContacts,
  filteredContactsSize
}) => {

  return (
    <Container alignEnd={hasError} alignCenter={!hasContacts}>
      {!hasError && hasContacts ? 
        <Title>
          {filteredContactsSize} 
          {filteredContactsSize === 1 ? " contato" : " contatos"}
        </Title>
      : ''}
      <Link to="/new">Novo contato</Link>
    </Container>
  )
}
