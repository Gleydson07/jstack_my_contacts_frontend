import React, { useState, useEffect } from 'react';
import { ToastMessage } from '../ToastMessage';

import {
  Container
} from './styles';

export const ToastContainer = () => {
  const [messages, setMessages] = useState([]);

  const addToast = (event) => {
    setMessages(prevState => [
      ...prevState, 
      {id: Math.random(), ...event.detail}
    ])
  };

  useEffect(() => {
    document.addEventListener('addtoast', addToast);

    return () => {
      document.removeEventListener('addtoast', addToast);
    }
  }, [])

  return (
    <Container>
      {messages.map(msg => (
        <ToastMessage
          key={msg.id}
          type={msg.type}
          text={msg.text}
        />
      ))}
    </Container>
  )
}
