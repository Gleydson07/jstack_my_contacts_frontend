import React, { useState } from 'react';
import { ToastMessage } from '../ToastMessage';

import {
  Container
} from './styles';

export const ToastContainer = () => {
  const [messages, setMessages] = useState([
    {id: Math.random(), type: 'info', text: 'Info message'},
    {id: Math.random(), type: 'error', text: 'Error message'},
    {id: Math.random(), type: 'success', text: 'Success message'},
    {id: Math.random(), type: 'info', text: 'Info message'},
  ])

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
