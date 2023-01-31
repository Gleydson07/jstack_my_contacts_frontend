import React from 'react';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';
import ReactPortal from '../ReactPortal';
import { Spinner } from '../Spinner';

import {
  Overlay
} from './styles';

export const Loader = ({isLoading}) => {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isLoading);

  if(!shouldRender){
    return null;
  }

  return (
    <ReactPortal portalId='portal-loader'>
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={90}/>
      </Overlay>
    </ReactPortal>
  )
}
