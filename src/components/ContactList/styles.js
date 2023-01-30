import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 32px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid ${({theme}) => theme.colors.gray[100]};

  > div {
    margin-left: 24px;

    strong{
      display: block;
      font-family: 'Sora';
      font-weight: 700;
      font-size: 22px;
      color: ${({theme}) => theme.colors.danger.main};
    }

    button{
      margin-top: 8px;
      font-weight: 700;
      text-decoration: none;
      padding: 8px 16px;
      color: ${({theme}) => theme.colors.background};
      border: 2px solid ${({theme}) => theme.colors.primary.main};
      background: ${({theme}) => theme.colors.primary.main};
      border-radius: 4px;

      transition: all 0.2s ease-in;
      
      &:hover{
        filter: opacity(0.9);
      }
    }
  }
`;

export const NotFoundContactsBySearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  span{
    display: block;
    margin-left: 16px;
    
    font-family: 'Sora';
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[200]};
    
    strong{
      font-weight: 700;
      color: ${({theme}) => theme.colors.primary.main};
    }
  }

`;

export const NotExistsContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid ${({theme}) => theme.colors.gray[100]};

  span{
    display: block;
    margin: 16px 32px 0;
    
    font-family: 'Sora';
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: ${({theme}) => theme.colors.gray[200]};
    
    strong{
      font-weight: 700;
      color: ${({theme}) => theme.colors.primary.main};
    }
  }

`;

export const Divider = styled.span`
  width: 100%;
  opacity: 0.2;
  width: 1px;
  color: #BCBCBC;
  border-radius: 1px;
`;

export const Body = styled.div`
  width: 100%;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid ${({theme}) => theme.colors.gray[100]};

  header{
    span{
      font-weight: 700;
      font-size: 16px;
      color: ${({theme}) => theme.colors.primary.main};
    }

    button{
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: none;
      outline: 0;
      padding: 4px;

      
      img{
        margin-left: 8px;
        transition: transform 0.2s ease-in;
        ${({orderBy}) => orderBy && css`
          transform: rotate(180deg);
        `}
      }
    }
  }
`;