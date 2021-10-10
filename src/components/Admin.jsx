import React from 'react';
import styled from 'styled-components';
import {
  ContainerSection,
  ContainerContentDark,
  ContainerFlexColumn,
} from '../styles/_containers';
import { Divider } from '../styles/_features';
import { SectionTitle } from '../styles/_titles';
import AdminConnect from './admin/AdminConnect';

const Admin = () => {
  return (
    <ContainerContact>
      <ContainerContentDark>
        <TitleContainer>
          <SectionTitle>Connection admin</SectionTitle>
          <Divider />
        </TitleContainer>
        <AdminConnect />
      </ContainerContentDark>
    </ContainerContact>
  );
};

export default Admin;

const ContainerContact = styled(ContainerSection)`
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleContainer = styled(ContainerFlexColumn)`
  height: 10%;
  @media (max-width: 768px) {
    margin-top: 2rem;
    height: 20%;
  }
`;
