import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ContainerFlexRow,
  ContainerFlexColumn,
} from '../../styles/_containers';
import {
  StyledForm,
  StyledInput,
  StyledInputSmall,
  StyledTextArea,
} from '../../styles/_form';
import { postNewProjectToApi, generateId } from '../../API/_requestApi';

const NewProject = ({ setNewChange, newChange /* setEdit, edit */ }) => {
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState('');
  const [category, setCategory] = useState('');
  const [technos, setTechnos] = useState('');
  const [mainPicture, setMainPicture] = useState('');
  const [picture1, setPicture1] = useState('');
  const [picture2, setPicture2] = useState('');
  const [appUrl, setAppUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [description, setDescription] = useState('');

  const CleanForm = () => {
    return () => {
      setTitle('');
      setPeriod('');
      setCategory('');
      setTechnos('');
      setMainPicture('');
      setPicture1('');
      setPicture2('');
      setAppUrl('');
      setGithubUrl('');
      setShortDescription('');
      setDescription('');
    };
  };

  const PostProject = (e) => {
    const newId = generateId();
    const project = {
      id: newId,
      title,
      date: period,
      category,
      short_description: shortDescription,
      techs: technos,
      front_picture: mainPicture,
      picture1,
      picture2,
      content: description,
      url_app: appUrl,
      url_github: githubUrl,
    };
    e.preventDefault();
    postNewProjectToApi(newId, project);
    setNewChange(!newChange);
    CleanForm();
    // setEdit(!edit);
  };

  useEffect(() => {
    return () => {
      setNewChange(!newChange);
      CleanForm();
    };
  });

  return (
    <NewProjectContainer>
      <StyledForm onSubmit={(e) => PostProject(e)}>
        <GroupFormContainer>
          <StyledInputSmall
            type="text"
            name="title"
            placeholder="Nom du projet"
            maxlength="45"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <StyledInputSmall
            type="text"
            name="date"
            placeholder="Période"
            maxlength="45"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            required
          />
          <StyledInputSmall
            type="text"
            name="category"
            placeholder="Catégorie"
            maxlength="45"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <StyledInputSmall
            type="text"
            name="techs"
            placeholder="Technologies utilisées"
            maxlength="255"
            value={technos}
            onChange={(e) => setTechnos(e.target.value)}
            required
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="front_picture"
            placeholder="URL photo principale"
            maxlength="255"
            value={mainPicture}
            onChange={(e) => setMainPicture(e.target.value)}
            required
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="picture1"
            placeholder="URL photo 1"
            value={picture1}
            onChange={(e) => setPicture1(e.target.value)}
            maxlength="255"
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="picture2"
            placeholder="URL photo 2"
            value={picture2}
            onChange={(e) => setPicture2(e.target.value)}
            maxlength="255"
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="url_app"
            placeholder="URL app"
            value={appUrl}
            onChange={(e) => setAppUrl(e.target.value)}
            maxlength="255"
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="url_github"
            placeholder="URL github"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            maxlength="255"
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="short_description"
            placeholder="Courte description ..."
            maxlength="255"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            required
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledTextArea
            type="text"
            name="content"
            placeholder="Description ..."
            maxlength="500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </GroupFormContainer>

        <button type="submit">Poster</button>
      </StyledForm>
    </NewProjectContainer>
  );
};

export default NewProject;

NewProject.propTypes = {
  setNewChange: PropTypes.func.isRequired,
  newChange: PropTypes.bool.isRequired,
  // setEdit: PropTypes.func.isRequired,
  // edit: PropTypes.bool.isRequired,
};

const NewProjectContainer = styled(ContainerFlexColumn)`
  margin-top: 1rem;
`;

const GroupFormContainer = styled(ContainerFlexRow)`
  justify-content: space-between;
  width: 90%;
`;
