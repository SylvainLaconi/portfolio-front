/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDate,
  StyledDescription,
  StyledTechnos,
} from '../../styles/_cards';
import {
  DateContainer,
  DescriptionContainer,
  HeaderContainer,
  RightContainer,
  TechnoContainer,
  TitleCardContainer,
} from '../../styles/_containers';
import { CardTitle } from '../../styles/_titles';

const RightCard = ({ project }) => {
  return (
    <RightContainer>
      <HeaderContainer>
        <TitleCardContainer>
          <CardTitle>{project.title}</CardTitle>
        </TitleCardContainer>
        <DateContainer>
          <StyledDate>{project.date}</StyledDate>
        </DateContainer>
      </HeaderContainer>
      <DescriptionContainer>
        <StyledDescription>{project.short_description}</StyledDescription>
      </DescriptionContainer>
      <TechnoContainer>
        <StyledTechnos>{project.techs}</StyledTechnos>
      </TechnoContainer>
    </RightContainer>
  );
};

export default RightCard;

RightCard.propTypes = {
  project: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};
