import React from 'react';
import { SkillContentContainer } from '../../styles/_containers';
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
