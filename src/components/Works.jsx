import React, { useContext, useState } from 'react';
import {
  ContainerContentDarkWork,
  ContainerWorks,
  TitleContainer,
} from '../styles/_containers';
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
          <SectionTitle>Portfolio</SectionTitle>
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
