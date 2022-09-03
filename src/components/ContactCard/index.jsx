import React from 'React';
import editSvg from '../../assets/images/edit.svg';
import deleteSvg from '../../assets/images/trash.svg';

import {
  Container,
  Wrapper,
  Settings,
  HeaderContainer,
  Button,
  Link
} from './styles';

export const ContactCard = ({contact}) => {

  return (
    <Container>
      <Wrapper>
        <HeaderContainer>
          <strong>{contact.name}</strong>
          <small>{contact.socialMedia}</small>
        </HeaderContainer>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </Wrapper>
      <Settings>
         <Link>
          <img src={editSvg} alt="editar" height={22}/>
         </Link>

         <Button>
            <img src={deleteSvg} alt="excluir" height={22}/>
         </Button>
      </Settings>
    </Container>
  )
}
