import React from 'react';
import {
  ContainerContact,
  ContainerContentDark,
  TitleContainer,
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
