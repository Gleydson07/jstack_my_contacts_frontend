import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small{
    color: ${({theme}) => theme.colors.danger.main};
  }

  .form-item{
    position: relative;
  }
`;

export const SpinnerWrapper = styled.div`   
  position: absolute;
  right: 32px;
  top: 18px;
`;
