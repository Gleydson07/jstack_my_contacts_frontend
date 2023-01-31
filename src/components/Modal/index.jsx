import React from 'react';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';
import { Button } from '../Button';
import ReactPortal from '../ReactPortal';

import {
  Container,
  Footer,
  Overlay
} from './styles';

export const Modal = ({
  title,
  danger = false,
  children,
  cancelLabel = 'Cancelar',
  onCancel,
  confirmLabel = 'Confirmar',
  onConfirm,
  isLoading,
  isOpen
}) => {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isOpen);
  
  if (!shouldRender) {
    return <></>
  }

  return (
    <ReactPortal portalId='portal-modal'>
      <Overlay isLeaving={!isOpen} ref={animatedElementRef}>
        <Container danger={danger} isLeaving={!isOpen}>
          <h1 className='modal-title'>{title}</h1>
          <div className="modal-body">
            {children}
          </div>
          <Footer>
            <button 
              type="button" 
              className='btn-cancel'
              disabled={isLoading}
              onClick={onCancel}
            >
              {cancelLabel}
            </button>
            <Button 
              type="button"
              danger={danger}
              label={confirmLabel}
              isLoading={isLoading}
              onClick={onConfirm}
            />
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  )
}
