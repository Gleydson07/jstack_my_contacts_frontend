import styled, { css } from 'styled-components';
import { Link as LinkRRDOM} from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`

export const Title = styled.h4`
  color: #222222;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  `

export const Link = styled(LinkRRDOM)`
  font-weight: 700;
  text-decoration: none;
  padding: 8px 16px;
  color: ${({theme}) => theme.colors.primary.main};
  border: 2px solid ${({theme}) => theme.colors.primary.main};
  border-radius: 4px;

  transition: all 0.2s ease-in;
  
  &:hover{
    background: ${({theme}) => theme.colors.primary.main};
    color: #FFFFFF;
  }
`

export const Divider = styled.span`
  width: 100%;
  opacity: 0.2;
  width: 1px;
  color: #BCBCBC;
  border-radius: 1px;
`

export const Body = styled.div`
  width: 100%;
  margin-top: 24px;

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
`