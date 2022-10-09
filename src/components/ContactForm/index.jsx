import React, { useState } from 'react';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/emailValidate';
import phoneFormat from '../../utils/phoneFormat';
import CategoriesService from '../../services/CategoriesService';

import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';

import {
  ButtonContainer,
  Form
} from './styles';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const ContactForm = ({
  buttonLabel,
  onSubmit
}) => {
  const {
    hasError,
    setError,
    removeError,
    getErrorMessageByFieldName
  } = useErrors();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [socialMedias, setSocialMedias] = useState([]);
  const [isLoadingSocialMedia, setIsLoadingSocialMedia] = useState(true);

  const loadSocialMedias = useCallback(async () => {
    setIsLoadingSocialMedia(true);
    try {
      const data = await CategoriesService.listCategories();      
      setSocialMedias(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingSocialMedia(false);
    }
  }, [])

  const handleNameChange = e => {
    setName(e.target.value);

    if(!e.target.value){
      setError({
        field: 'name', 
        message: 'Nome é um campo obrigatório.'
      });
    }else{
      removeError({field: 'name'});
    }
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);

    if(e.target.value && !isEmailValid(e.target.value)){
      setError({
        field: 'email', 
        message: 'Formato de e-mail inválido.'
      });
    }else{
      removeError({field: 'email'});
    }
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleSocialMediaChange = e => {
    setSocialMedia(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      name,
      email,
      phone,
      categoryId: socialMedia
    })
  };

  useEffect(() => { loadSocialMedias() }, []);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input 
          placeholder='Nome *'
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input 
          placeholder='E-mail'
          value={email}
          type="email"
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input 
          placeholder='Telefone'
          value={phoneFormat(phone)}
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingSocialMedia}>
        <Select 
          value={socialMedia}
          onChange={handleSocialMediaChange}
          disabled={isLoadingSocialMedia}
        >
          <option defaultValue="-">Sem rede social</option>
          {socialMedias.map(media => (
            <option key={media.id} value={media.id}>
              {media.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button disabled={!name || hasError} type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  )
}
