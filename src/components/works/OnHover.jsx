import React from 'react';
import styled from 'styled-components';
import { ContainerFlexRow } from '../../styles/_containers';

const OnHover = () => {
  return <OnHoverContainer />;
};

export default OnHover;

const OnHoverContainer = styled(ContainerFlexRow)`
  position: absolute;
  background-color: white;
  opacity: 0.3;
  z-index: 1;
  height: 260px;
  width: 500px;
  @media (max-width: 768px) {
    height: 166px;
    width: 320px;
  }
`;
