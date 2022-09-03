import React from 'React';
import logoSvg from '../../assets/images/logo.svg';

import {
  Container, 
  InputSearchContainer
} from './styles';

export const Header = () => {

  return (
    <Container>
      <img src={logoSvg} alt="My Contacts" width={201}/>

      <InputSearchContainer>
        <input  placeholder='Pesquisar pelo nome...'/>
      </InputSearchContainer>
    </Container>
  )
}
