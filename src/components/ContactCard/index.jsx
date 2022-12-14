import React from 'react';
import editSvg from '../../assets/images/edit.svg';
import deleteSvg from '../../assets/images/trash.svg';
import phoneFormat from '../../utils/phoneFormat';

import {
  Container,
  Wrapper,
  Settings,
  HeaderContainer,
  Button,
  Link
} from './styles';

export const ContactCard = ({contact, onDelete}) => {
  return (
    <Container>
      <Wrapper>
        <HeaderContainer>
          <strong>{contact.name}</strong>
          <small>{contact.categoryName}</small>
        </HeaderContainer>
        <p>{contact.email}</p>
        <p>{phoneFormat(contact.phone)}</p>
      </Wrapper>
      <Settings>
         <Link to={`/edit/${contact.id}`}>
          <img src={editSvg} alt="editar" height={22}/>
         </Link>
         <Button onClick={onDelete}>
            <img src={deleteSvg} alt="excluir" height={22}/>
         </Button>
      </Settings>
    </Container>
  )
}
