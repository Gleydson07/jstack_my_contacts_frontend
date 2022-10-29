import { useRef } from 'react';
import ContactService from '../../services/ContactsService';
import toast from '../../utils/toast';

export function useController() {
  const contactFormRef = useRef(null);

  const handleCreateContact = async (contact) => {
    try {
      await ContactService.createContact(contact);
      contactFormRef.current.resetFields();
      toast('success', 'Contato salvo com sucesso!', 5000);
    } catch (error) {
      toast('error', 'Ocorreu um erro ao tentar salvar contato!', 5000);
    }
  }

  return {
    contactFormRef,
    handleCreateContact,
  }
}