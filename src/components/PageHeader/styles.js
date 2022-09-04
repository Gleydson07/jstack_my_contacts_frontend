import styled from 'styled-components';

export const Container = styled.section`
  display: block;  
  margin-bottom: 24px;

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    width: fit-content;

    span{
      color: ${({theme}) => theme.colors.primary.main};
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      margin-left: 8px;
    }

    img{
      transform: rotate(-90deg);
    }
  }

  h1{
    display: block;
    margin-top: 8px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #222222;
  }
`;