import React from 'react';
import { NavLink } from 'react-router-dom';

import arrowSvg from '../../assets/images/arrow.svg';

import {
  Container
} from './styles';

export const PageHeader = ({
  link,
  title
}) => {

  return (
    <Container>
      <NavLink  to={link}>
        <img src={arrowSvg} alt="back" />
        <span>Voltar</span>
      </NavLink >

      <h1>{title}</h1>
    </Container>
  )
}
