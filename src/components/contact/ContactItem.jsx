import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactItemContainer,
  IconContactContainer,
} from '../../styles/_containers';
import { ContactIconImg } from '../../styles/_img';
import { AboutText } from '../../styles/_texts';

const ContactItem = ({ icone, content, description }) => {
  return (
    <ContactItemContainer>
      <IconContactContainer>
        <ContactIconImg src={icone} alt={description} />
      </IconContactContainer>
      <AboutText>{content}</AboutText>
    </ContactItemContainer>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icone: PropTypes.any.isRequired,
  content: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
