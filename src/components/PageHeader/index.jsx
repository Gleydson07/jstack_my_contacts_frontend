import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to={link}>
        <img src={arrowSvg} alt="back" />
        <span>Voltar</span>
      </Link>

      <h1>{title}</h1>
    </Container>
  )
}
