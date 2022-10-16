import React from 'react';
import ReactPortal from '../ReactPortal';
import { Spinner } from '../Spinner';

import {
  Overlay
} from './styles';

export const Loader = ({isLoading}) => {
  if(!isLoading){
    return null;
  }

  return (
    <ReactPortal portalId='portal-loader'>
      <Overlay>
        <Spinner size={90}/>
      </Overlay>
    </ReactPortal>
  )
}
