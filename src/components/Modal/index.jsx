import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../Button';

import {
  Container,
  Footer,
  Overlay
} from './styles';

export const Modal = ({danger = false}) => {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Título do modal</h1>
        <p>Corpo do modal</p>
        <Footer>
          <button type="button" className='btn-cancel'>
            Cancelar
          </button>
          <Button type="button" danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  , document.getElementById('modal-root'))
}
