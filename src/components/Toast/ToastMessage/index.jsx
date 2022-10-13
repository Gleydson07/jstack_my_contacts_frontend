import React from 'react';
import xCircleSvg from '../../../assets/images/x-circle.svg';
import checkCircleSvg from '../../../assets/images/check-circle.svg';

import {
  Container
} from './styles';
import { useEffect } from 'react';

export const ToastMessage = ({
  message,
  onRemoveMessage
}) => {
  const {id, type, text, duration} = message;
  const handleRemoveToast = () => {
    onRemoveMessage(id);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => onRemoveMessage(id), duration || 7000);

    return () => {
      clearTimeout(timeoutId); 
    }
  }, [message, onRemoveMessage])

  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
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
