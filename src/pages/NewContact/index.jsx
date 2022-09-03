import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PageHeader } from '../../components/PageHeader';
import { Select } from '../../components/Select';

import {
  Container
} from './styles';

export const NewContact = () => {

  return (
    <Container>
      <PageHeader link="/" title="Novo contato"/>

      <Input type="text" placeholder="Nome"/>
      <Select required placeholder="Selecionar rede social">
        <option value="0" selected disabled>Selecionar rede social</option>
        <option value="3">WhatsApp</option>
        <option value="1">Facebook</option>
        <option value="2">Instagram</option>
      </Select>

      <Button type='button'>Salvar contato</Button>
    </Container>
  )
}
