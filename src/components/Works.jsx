import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ContainerFlexColumn, ContainerSection } from '../styles/_containers';
import { Divider } from '../styles/_features';
import { SectionTitle } from '../styles/_titles';
import WorksContent from './works/WorksContent';
import AdminContext from '../context/AdminContext';
import EditButton from './works/EditButton';
import NewProject from './works/NewProject';

const Works = () => {
  const { isAdmin } = useContext(AdminContext);
  const [edit, setEdit] = useState(false);
  const [newChange, setNewChange] = useState(false);

  return (
    <ContainerWorks id="works">
      <ContainerContentDarkWork>
        <TitleContainer>
          <SectionTitle>Réalisations</SectionTitle>
          <Divider />
        </TitleContainer>
        {isAdmin && <EditButton edit={edit} setEdit={setEdit} />}
        {isAdmin && edit && (
          <NewProject
            setNewChange={setNewChange}
            newChange={newChange}
            edit={edit}
            setEdit={setEdit}
          />
        )}
        <WorksContent
          newChange={newChange}
          setNewChange={setNewChange}
          edit={edit}
        />
      </ContainerContentDarkWork>
    </ContainerWorks>
  );
};

export default Works;

const ContainerContentDarkWork = styled(ContainerFlexColumn)`
  width: 60%;
  height: 100%;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 95%;
    height: auto;
  }
`;

const ContainerWorks = styled(ContainerSection)`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: none;
  height: auto;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  @media (max-width: 768px) {
    padding-top: 0rem;
    padding-bottom: 2rem;
  }
`;

const TitleContainer = styled(ContainerFlexColumn)`
  height: 10%;
  @media (max-width: 768px) {
    margin-top: 2rem;
    height: 20%;
  }
`;
