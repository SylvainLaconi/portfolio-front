import React from 'react';
import { Parallax } from 'react-parallax';
import {
  ContainerContact,
  ContainerContentDark,
  TitleContainer,
} from '../styles/_containers';
import { Divider } from '../styles/_features';
import { SectionTitle } from '../styles/_titles';
import aboutBackGround from '../images/backgrounds/about_background.jpg';
import ContactDetails from './contact/ContactDetails';
import NetworksDetails from './contact/NetworksDetails';

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
            <SectionTitle>Contact</SectionTitle>
            <Divider />
          </TitleContainer>
          <ContactDetails />
          <NetworksDetails />
        </ContainerContentDark>
      </ContainerContact>
    </Parallax>
  );
};

export default ContactMe;
