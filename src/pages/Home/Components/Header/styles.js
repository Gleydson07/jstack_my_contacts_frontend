import styled from 'styled-components';
import { Link as LinkRRDOM} from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: ${({ alignEnd, alignCenter }) => alignEnd ? 'flex-end' : alignCenter ? 'center' : 'space-between'};
  align-items: center;
  margin-top: 32px;
`

export const Title = styled.h4`
  color: #222222;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
`;

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
`;