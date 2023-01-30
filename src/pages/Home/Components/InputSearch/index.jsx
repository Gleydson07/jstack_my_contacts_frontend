import React from 'react';
import { InputSearchContainer } from './styles';

export const InputSearch = ({
  value,
  onChange
}) => {
  return (
    <InputSearchContainer>
      <input  
        type="text"
        placeholder='Pesquisar pelo nome...'
        value={value}
        onChange={onChange}
      />
    </InputSearchContainer>
  )
}
