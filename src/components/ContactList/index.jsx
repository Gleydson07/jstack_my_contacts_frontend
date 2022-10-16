import React from 'react';
import { ContactCard } from '../ContactCard';

import arrowSvg from '../../assets/images/arrow.svg';
import sadSvg from '../../assets/images/sad.svg';
import emptyBoxSvg from '../../assets/images/empty-box.svg';
import magnifierQuestionSvg from '../../assets/images/magnifier-question.svg';

import {
  Link,
  Container,
  Header, 
  Title,
  Body,
  ErrorContainer,
  NotExistsContactsContainer,
  NotFoundContactsBySearch
} from './styles';

export const ContactList = ({
  contacts, 
  filteredContacts,
  toggleOrder, 
  order, 
  hasError,
  handleTryAgain,
  isLoading,
  onDelete,
  search
}) => {
  return (
    <Container>
      <Header alignEnd={hasError} alignCenter={!contacts.length}>
        {!hasError && contacts.length ? 
          <Title>
            {filteredContacts.length} 
            {filteredContacts.length === 1 ? " contato" : " contatos"}
          </Title>
        : ''}
        <Link to="/new">Novo contato</Link>
      </Header>

      {!hasError ? 
        contacts.length ?
          <Body orderBy={order}>
            {filteredContacts.length ?
              <>
                <header>
                  <button 
                    type='button' 
                    className='sort-button'
                    onClick={toggleOrder}
                  >
                    <span>Nome</span>
                    <img src={arrowSvg} alt="seta" />
                  </button>
                </header>
    
                {filteredContacts.map(contact => (
                  <ContactCard
                    key={contact.id}
                    contact={contact}
                    onDelete={() => onDelete(contact)}
                  />
                ))}
              </>
            : 
              <NotFoundContactsBySearch>
                <img src={magnifierQuestionSvg} alt="busca" />
                <span>
                  Nenhum resultado foi encontrado para <strong>”{search}”</strong>.
                </span>
              </NotFoundContactsBySearch>
            }
          </Body>
          : 
          !isLoading && 
            <NotExistsContactsContainer>
              <img src={emptyBoxSvg} alt="caixa vazia" />
              <span>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o seu primeiro!
              </span>
            </NotExistsContactsContainer>
      : 
        <ErrorContainer>
          <img src={sadSvg} alt="carinha triste" />
          <div>
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <button onClick={handleTryAgain}>Tentar novamente</button>
          </div>
        </ErrorContainer>
      }
    </Container>
  )
}
