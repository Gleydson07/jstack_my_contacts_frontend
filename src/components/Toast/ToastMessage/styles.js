import styled from 'styled-components';

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
  color: ${({ theme }) => theme.colors.background};
  background: ${({ type }) => toast[type]};

  & + & {
    margin-top: 12px;
  }

  > img {
    margin-right: 8px;
  }
`;