import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 100%; }
`;

const fadeOut = keyframes`
  from { opacity: 100%; }
  to { opacity: 0; }
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(246, 246, 246, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s;

  ${({isLeaving}) => isLeaving && css`animation: ${fadeOut} 0.2s forwards;`};
`;

