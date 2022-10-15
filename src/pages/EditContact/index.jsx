import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ContactService from '../../services/ContactsService';
import { ContactForm } from '../../components/ContactForm';
import { Loader } from '../../components/Loader';
import { PageHeader } from '../../components/PageHeader';
import toast from '../../utils/toast';

import {
  Container
} from './styles';

export const EditContact = () => {
  const {id} = useParams();
  const navigate = useNavigate();
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
    }
  }

  const handleEditContact = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId
      }

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
    <Container>
      <Loader isLoading={isLoading}/>
      <PageHeader 
        link="/" 
        title={
          !isLoading ? 
          `Editar ${contactName}` : 
          'Carregando...'
        }
      />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleEditContact}
      />
    </Container>
  )
}
