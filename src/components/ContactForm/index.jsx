import React, { useState } from 'react';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/emailValidate';
import phoneFormat from '../../utils/phoneFormat';

import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';

import {
  ButtonContainer,
  Form
} from './styles';

export const ContactForm = ({
  buttonLabel
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
  }

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

      <FormGroup>
        <Select 
          value={socialMedia}
          onChange={handleSocialMediaChange} 
        >
          <option defaultValue="-">Selecione uma rede social</option>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button disabled={!name || hasError} type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  )
}
