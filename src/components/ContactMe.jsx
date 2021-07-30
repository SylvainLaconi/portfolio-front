import React from 'react';
import { Parallax } from 'react-parallax';
import {
  ContainerContact,
  ContainerContentDark,
  TitleContainer,
} from '../styles/_containers';
import { Divider } from '../styles/_features';
import { SectionTitle } from '../styles/_titles';
import Form from './contact/Form';
import aboutBackGround from '../images/backgrounds/about_background.jpg';

const ContactMe = () => {
  return (
    <Parallax
      blur={{ min: -1, max: 3 }}
      bgImage={aboutBackGround}
      bgImageAlt="projects"
      strength={-200}
    >
      <ContainerContact id="contact">
        <ContainerContentDark>
          <TitleContainer>
            <SectionTitle>Contactez-moi</SectionTitle>
            <Divider />
          </TitleContainer>
          <Form />
        </ContainerContentDark>
      </ContainerContact>
    </Parallax>
  );
};

export default ContactMe;
