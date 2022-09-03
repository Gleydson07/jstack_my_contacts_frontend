import React from 'react';
import logoSvg from '../../assets/images/logo.svg';

import {
  Container
} from './styles';

export const Header = () => {

  return (
    <Container>
      <img src={logoSvg} alt="My Contacts" width={201}/>
    </Container>
  )
}
