import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 4px;
  background: #FFFFFF;
  border: 2px solid #FFFFFF;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
  outline: 0;
  padding: 0 16px;
  font-size: 16px;
  appearance: none;

  transition: border-color 0.2s ease-in;

  &:focus{
    border-color: ${({theme}) => theme.colors.primary.main};
  }
  
  ${({theme, error}) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${({theme}) => theme.colors.danger.main};
    
    &:focus{
      border-color: ${({theme}) => theme.colors.danger.main};
    }
  `};

  @media(max-width: 450px) {
    appearance: none;
  }
`;