import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ContactService from '../../services/ContactsService';
import toast from '../../utils/toast';

import { Presentation } from './Presentation';

export const Container = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const contactFormRef = useRef(null);
  const [contactName, setContactName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const loadContact = async () => {
    setIsLoading(true);
    try {
      const response = await ContactService.findContact(id);
      contactFormRef.current.setFieldsValues(response);
      setContactName(response.name);
      setIsLoading(false);
    } catch {      
      navigate('/');
      toast('error', 'Contato não encontrado');
    }
  }

  const handleEditContact = async (contact) => {
    try {
      const contactData = await ContactService.editContact(id, contact);
      setContactName(contactData.name);
      toast('success', 'Contato salvo com sucesso!', 5000);
    } catch (error) {
      toast('error', 'Ocorreu um erro ao tentar salvar contato!', 5000);
    }
  }

  useEffect(() => {
    loadContact();
  }, []);
  
  return (
    <Presentation 
      isLoading={isLoading}
      contactName={contactName}
      contactFormRef={contactFormRef}
      onSubmit={handleEditContact}
    />
  )
}
