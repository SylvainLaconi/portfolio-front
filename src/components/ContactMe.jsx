import React from 'react';
import {
  ContainerContact,
  ContainerContentDark,
  TitleContainer,
} from '../styles/_containers';
import { Divider } from '../styles/_features';
import { SectionTitle } from '../styles/_titles';
import Form from './contact/Form';

const ContactMe = () => {
  return (
    <ContainerContact id="contact">
      <ContainerContentDark>
        <TitleContainer>
          <SectionTitle>Contactez-moi</SectionTitle>
          <Divider />
        </TitleContainer>
        <Form />
      </ContainerContentDark>
    </ContainerContact>
  );
};

export default ContactMe;
