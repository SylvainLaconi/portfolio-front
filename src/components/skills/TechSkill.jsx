import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ContainerFlexRow,
  ContainerFlexColumn,
} from '../../styles/_containers';

const TechSkill = ({ skill, icon }) => {
  return (
    <TechSkillContainer>
      <IconSkillContainer>
        <IconImg src={icon} alt={skill} />
      </IconSkillContainer>
      <TextIconSkillContainer>
        <p>{skill}</p>
      </TextIconSkillContainer>
    </TechSkillContainer>
  );
};

export default TechSkill;

TechSkill.propTypes = {
  skill: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const TechSkillContainer = styled(ContainerFlexColumn)`
  text-align: center;
  width: 15%;
  min-width: 50px;
  @media (max-width: 768px) {
    width: 32%;
    min-width: 0;
    margin-bottom: 30px;
  }
`;

const IconSkillContainer = styled(ContainerFlexRow)`
  width: 100%;
  min-width: 50px;
  height: auto;
  @media (max-width: 768px) {
  }
`;

const TextIconSkillContainer = styled(ContainerFlexRow)`
  height: 20%;
`;

const IconImg = styled.img`
  width: 100px;
  @media (max-width: 768px) {
    width: 70px;
  }
`;
