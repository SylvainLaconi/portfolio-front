/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContainerFlexRow } from '../../styles/_containers';

const RightCard = ({ project }) => {
  return (
    <RightContainer>
      <TitleCardContainer>
        <CardTitle>{project.title}</CardTitle>
      </TitleCardContainer>
      <DateContainer>
        <StyledDate>{project.date}</StyledDate>
      </DateContainer>
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

const TitleCardContainer = styled(ContainerFlexRow)`
  height: 25%;
  width: 95%;
  justify-content: center;
`;

const DateContainer = styled(ContainerFlexRow)`
  height: 10%;
  width: 95%;
  justify-content: center;
`;

const DescriptionContainer = styled(ContainerFlexRow)`
  height: 40%;
  width: 95%;
`;

const TechnoContainer = styled(ContainerFlexRow)`
  height: 25%;
  justify-content: center;
  width: 95%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 300px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledDate = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const StyledDescription = styled.p`
  font-size: 16px;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const StyledTechnos = styled.p`
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
