import React from 'react';
import xCircleSvg from '../../../assets/images/x-circle.svg';
import checkCircleSvg from '../../../assets/images/check-circle.svg';

import {
  Container
} from './styles';

export const ToastMessage = ({
  type = 'info',
  text
}) => {

  return (
    <Container type={type}>
      {type !== 'info' && 
        <img 
          src={type === 'success' ? checkCircleSvg : xCircleSvg} 
          alt={type === 'success' ? 'xis' : 'check'}
          width={20}
          height={20}
        />
      }
      <strong>{text}</strong>
    </Container>
  )
}
