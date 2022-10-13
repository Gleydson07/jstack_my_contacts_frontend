import React, { useState, useEffect } from 'react';
import { toastEventManager } from '../../../utils/toast';
import { ToastMessage } from '../ToastMessage';

import {
  Container
} from './styles';

export const ToastContainer = () => {
  const [messages, setMessages] = useState([]);

  const addToast = ({ type, text}) => {
    setMessages(prevState => [
      ...prevState, 
      {id: Math.random(), type, text}
    ])
  };

  const handleRemoveMessage = (id) => {
    const filteredMessages = messages.filter(msg => msg.id !== id);
    setMessages(filteredMessages);
  };

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
          id={msg.id}
          type={msg.type}
          text={msg.text}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  )
}
