import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContainerFlexRow } from '../../styles/_containers';

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

const ContactItemContainer = styled(ContainerFlexRow)`
  justify-content: flex-start;
`;

const IconContactContainer = styled(ContainerFlexRow)`
  width: 30px;
  margin-right: 20px;
`;

const ContactIconImg = styled.img`
  width: 30px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 2rem;
  text-align: center;
  margin: 0;
  line-height: 3;
  @media (max-width: 768px) {
    font-size: 12px;
    text-align: justify;
    line-height: 2;
  }
  @media (min-width: 768px) and (max-width: 1800px) {
    font-size: 16px;
    text-align: center;
    line-height: 2;
  } ;
`;
