import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  background: ${({theme}) => theme.colors.primary.main};

  transition: background 0.2s ease-in;
  
  &:hover{
    background: ${({theme}) => theme.colors.primary.light};
  }

  &:active{
    background: ${({theme}) => theme.colors.primary.dark};
  }

  ${({theme, danger}) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover{
      background: ${theme.colors.danger.light};
    }

    &:active{
      background: ${theme.colors.danger.dark};
    }
  `};

  &[disabled]{
    cursor: default;
    color: ${({theme}) => theme.colors.disabled};
    background: ${({theme}) => theme.colors.primary.lighter};
  }
`;