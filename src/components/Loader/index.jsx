import React from 'react';
import ReactDOM from 'react-dom';

import {
  Overlay
} from './styles';

export const Loader = () => {
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader"/>
    </Overlay>
  , document.getElementById('loader-root'))
}
