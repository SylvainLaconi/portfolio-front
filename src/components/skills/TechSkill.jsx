import React from 'react';
import PropTypes from 'prop-types';
import {
  IconSkillContainer,
  TechSkillContainer,
  TextIconSkillContainer,
} from '../../styles/_containers';
import { IconImg } from '../../styles/_img';

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
