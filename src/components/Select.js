import styled from 'styled-components';

export const Select = styled.select`
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
  transition: border-color 0.2s ease-in;

  &:focus{
    border-color: ${({theme}) => theme.colors.primary.main};
  }

  &[disabled]{    
    border-color: ${({theme}) => theme.colors.gray[200]};
    background-color: ${({theme}) => theme.colors.gray[100]};
  }

  option{
    &:disabled{
      color: #BCBCBC;
    }
  }

  @media(max-width: 450px) {
    appearance: none;
  }
`;