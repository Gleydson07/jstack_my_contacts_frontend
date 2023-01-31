import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 100%; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 100%; }
  to { opacity: 0; }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s;

  ${({isLeaving}) => isLeaving && css`animation: ${fadeOut} 0.2s forwards;`};
`;

export const Container = styled.div`
  background: #FFFFFF;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
  max-width: 450px;
  width: 100%;
  animation: ${scaleIn} 0.3s;

  ${({isLeaving}) => isLeaving && css`animation: ${scaleOut} 0.2s forwards;`};

  .modal-title{
    font-size: 22px;
    color: ${({theme, danger}) => (
      danger ? theme.colors.danger.main: theme.colors.gray[900]
    )}
  }

  .modal-body{
    margin-top: 32px;
  }
  
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;

  .btn-cancel{
    height: 52px;
    padding: 0 16px;
    margin-right: 8px;
    border: none;
    font-size: 16px;
    background: transparent;    
    color: #BCBCBC;
    transition: background 0.2s ease-in;

    &[disabled] {
      cursor: default;
    }
  }
`