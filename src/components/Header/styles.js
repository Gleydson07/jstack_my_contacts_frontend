import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 74px;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
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