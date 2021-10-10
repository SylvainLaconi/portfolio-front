import React from 'react';
import styled from 'styled-components';
import { ContainerFlexColumn } from '../../styles/_containers';
import DevSection from './DevSection';
import TechnicalSection from './TechnicalSection';

const SkillsContent = () => {
  return (
    <SkillContentContainer>
      <TechnicalSection />
      <DevSection />
    </SkillContentContainer>
  );
};

export default SkillsContent;

const SkillContentContainer = styled(ContainerFlexColumn)`
  height: 90%;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    justify-content: flex-start;
    height: 60%;
  }
`;
