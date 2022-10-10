

import React from 'react';
import { Spinner } from '../Spinner';

import {
  StyledButton
} from './styles';

export const Button = ({
  label,
  onClick,
  type,
  disabled,
  isLoading
}) => {

  return (
    <StyledButton 
      type={type} 
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? <Spinner size={16}/> : label}
    </StyledButton>
  )
}
