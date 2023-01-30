import styled from 'styled-components';

export const InputSearchContainer = styled.div`
  width: 100%;
  
  input{
    width: 100%;
    height: 50px;
    border: none;
    outline: 0;
    border-radius: 25px;
    background: #FFFFFF;
    padding: 0 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);

    &::placeholder{
      color: #BCBCBC;
    }
  }
`