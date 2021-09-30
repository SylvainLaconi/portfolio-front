import React from 'react';
import ContactItem from './ContactItem';
import telIcon from '../../images/icons/icons8-phone-100.png';
import adressIcon from '../../images/icons/icons8-adresse-100.png';
import mailIcon from '../../images/icons/icons8-mail-100.png';
import { ContactDetailsContainer } from '../../styles/_containers';

const ContactDetails = () => {
  return (
    <ContactDetailsContainer>
      <a href="tel:+33 (0) 6 10 73 01 60">
        <ContactItem
          icone={telIcon}
          content="+33 (0) 6 10 73 01 60"
          description="téléphone"
        />
      </a>

      <ContactItem
        icone={adressIcon}
        content="11 rue de Montretout, 91220 Saint-Cloud"
        description="adresse"
      />

      <a href="mailto:sylvain.laconi@gmail.com">
        <ContactItem
          icone={mailIcon}
          content="sylvain.laconi@gmail.com"
          description="email"
        />
      </a>
    </ContactDetailsContainer>
  );
};

export default ContactDetails;
