import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { toastEventManager } from '../../../utils/toast';
import { ToastMessage } from '../ToastMessage';

import {
  Container
} from './styles';

export const ToastContainer = () => {
  const [messages, setMessages] = useState([]);

  const addToast = ({ type, text, duration}) => {
    setMessages(prevState => [
      ...prevState, 
      {id: Math.random(), type, text, duration}
    ])
  };

  const handleRemoveMessage = useCallback((id) => {
    setMessages(prevState => prevState.filter(msg => msg.id !== id));
  }, []);

  useEffect(() => {
    toastEventManager.on('addtoast', addToast);

    return () => {
      toastEventManager.removeListener('addtoast', addToast);
    }
  }, [])

  return (
    <Container>
      {messages.map(msg => (
        <ToastMessage
          key={msg.id}
          message={msg}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  )
}
