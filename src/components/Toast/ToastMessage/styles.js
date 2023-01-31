import styled, { css, keyframes } from 'styled-components';

const messageIn = keyframes`
  from { 
    opactity: 0;
    transform: translateY(100px)
  }

  to { 
    opactity: 1;
    transform: translateY(0)
  }
`;

const messageOut = keyframes`
  from { 
    opactity: 1;
    transform: translateY(0)
  }

  to { 
    opactity: 0;
    transform: translateY(100px)
  }
`;

const toast = {
  success:  ({theme}) => theme.colors.success.main,
  error:  ({theme}) => theme.colors.danger.main,
  info:  ({theme}) => theme.colors.primary.main
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  border-radius: 4px;
  font-family: 'Sora';
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ type }) => toast[type] || toast.info};
  animation: ${messageIn} 0.3s;
  
  ${({isLeaving}) => isLeaving && css`animation: ${messageOut} 0.3s forwards;`};

  & + & {
    margin-top: 12px;
  }

  > img {
    margin-right: 8px;
  }
`;