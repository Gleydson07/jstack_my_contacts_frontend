

import React from 'react';
import { Spinner } from '../Spinner';

import {
  StyledButton
} from './styles';

export const Button = ({
  type,
  label,
  onClick,
  danger = false,
  disabled,
  isLoading
}) => {

  return (
    <StyledButton 
      type={type} 
      disabled={disabled || isLoading}
      onClick={onClick}
      danger={danger}
    >
      {isLoading ? <Spinner size={16}/> : label}
    </StyledButton>
  )
}
