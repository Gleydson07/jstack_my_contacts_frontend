import styled from 'styled-components';
import { Link as LinkRRDOM} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  & + &{
    margin-top: 16px;
  }
`;

export const Wrapper = styled.div`
  max-width: 410px;
  width: 100%;

  p{
    font-size: 14px;
    line-height: 18px;
    color: #BCBCBC;
    margin-top: 4px;
  }
`;

export const Settings = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 60px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  outline: 0;
  margin-left: 8px;
`

export const Link = styled(LinkRRDOM)`
  display: block;
  text-decoration: none;
  cursor: pointer;
`

export const HeaderContainer = styled.div`
  small{
    color : ${({theme}) => theme.colors.primary.main};
    background: ${({theme}) => theme.colors.primary.lighter};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    border-radius: 4px;
    padding: 4px;
    margin-left: 14px;
    cursor: pointer;
  }
`;