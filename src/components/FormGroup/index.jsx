import React from 'react';
import { Spinner } from '../Spinner';
import { Loader } from '../Loader';
import {
  Container, SpinnerWrapper
} from './styles';

export const FormGroup = ({children, error = null, isLoading = false}) => {

  return (
    <Container>
      <div className="form-item">
        {children}
        {isLoading && 
          <SpinnerWrapper>
            <Spinner size={16}/>
          </SpinnerWrapper>
        }
      </div>
      {error ? <small>{error}</small> : ''}
    </Container>
  )
}
