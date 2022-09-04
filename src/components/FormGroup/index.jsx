import React from 'react';
import {
  Container
} from './styles';

export const FormGroup = ({children, error = null}) => {

  return (
    <Container>
      {children}
      {error ? <small>{error}</small> : ''}
    </Container>
  )
}
