/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RightContainer, GroupFormContainer } from '../../styles/_containers';
import {
  StyledForm,
  StyledInputSmall,
  StyledInput,
  StyledTextArea,
} from '../../styles/_form';
import { Button } from '../../styles/_features';
import { updateProjectToApi } from '../../API/_requestApi';

const RightCardEdit = ({ project, setNewChange, newChange }) => {
  const [titleToUpdate, setTitleToUpdate] = useState(project.title);
  const [periodToUpdate, setPeriodToUpdate] = useState(project.date);
  const [categoryToUpdate, setCategoryToUpdate] = useState(project.category);
  const [technosToUpdate, setTechnosToUpdate] = useState(project.techs);
  const [mainPictureToUpdate, setMainPictureToUpdate] = useState(
    project.front_picture
  );
  const [picture1ToUpdate, setPicture1ToUpdate] = useState(project.picture1);
  const [picture2ToUpdate, setPicture2ToUpdate] = useState(project.picture2);
  const [appUrlToUpdate, setAppUrlToUpdate] = useState(project.url_app);
  const [githubUrlToUpdate, setGithubUrlToUpdate] = useState(
    project.url_github
  );
  const [shortDescriptionToUpdate, setShortDescriptionToUpdate] = useState(
    project.short_description
  );
  const [descriptionToUpdate, setDescriptionToUpdate] = useState(
    project.content
  );

  const UpdateProject = (e) => {
    const projectToUpdate = {
      title: titleToUpdate,
      date: periodToUpdate,
      category: categoryToUpdate,
      short_description: shortDescriptionToUpdate,
      techs: technosToUpdate,
      front_picture: mainPictureToUpdate,
      picture1: picture1ToUpdate,
      picture2: picture2ToUpdate,
      content: descriptionToUpdate,
      url_app: appUrlToUpdate,
      url_github: githubUrlToUpdate,
    };
    e.preventDefault();
    updateProjectToApi(project.id, projectToUpdate);
    setNewChange(!newChange);
  };

  return (
    <RightContainer>
      {' '}
      <StyledForm
        style={{ overflow: 'auto' }}
        onSubmit={(e) => UpdateProject(e)}
      >
        <GroupFormContainer>
          <StyledInputSmall
            type="text"
            name="title"
            placeholder="Nom du projet"
            maxlength="45"
            value={titleToUpdate}
            onChange={(e) => setTitleToUpdate(e.target.value)}
            required
          />
          <StyledInputSmall
            type="text"
            name="date"
            placeholder="Période"
            maxlength="45"
            value={periodToUpdate}
            onChange={(e) => setPeriodToUpdate(e.target.value)}
            required
          />
          <StyledInputSmall
            type="text"
            name="category"
            placeholder="Catégorie"
            maxlength="45"
            value={categoryToUpdate}
            onChange={(e) => setCategoryToUpdate(e.target.value)}
            required
          />
          <StyledInputSmall
            type="text"
            name="techs"
            placeholder="Technologies utilisées"
            maxlength="255"
            value={technosToUpdate}
            onChange={(e) => setTechnosToUpdate(e.target.value)}
            required
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="front_picture"
            placeholder="URL photo principale"
            maxlength="255"
            value={mainPictureToUpdate}
            onChange={(e) => setMainPictureToUpdate(e.target.value)}
            required
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="picture1"
            placeholder="URL photo 1"
            value={picture1ToUpdate}
            onChange={(e) => setPicture1ToUpdate(e.target.value)}
            maxlength="255"
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="picture2"
            placeholder="URL photo 2"
            value={picture2ToUpdate}
            onChange={(e) => setPicture2ToUpdate(e.target.value)}
            maxlength="255"
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="url_app"
            placeholder="URL app"
            value={appUrlToUpdate}
            onChange={(e) => setAppUrlToUpdate(e.target.value)}
            maxlength="255"
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="url_github"
            placeholder="URL github"
            value={githubUrlToUpdate}
            onChange={(e) => setGithubUrlToUpdate(e.target.value)}
            maxlength="255"
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledInput
            type="text"
            name="short_description"
            placeholder="Courte description ..."
            maxlength="255"
            value={shortDescriptionToUpdate}
            onChange={(e) => setShortDescriptionToUpdate(e.target.value)}
            required
          />
        </GroupFormContainer>
        <GroupFormContainer>
          <StyledTextArea
            type="text"
            name="content"
            placeholder="Description ..."
            maxlength="500"
            value={descriptionToUpdate}
            onChange={(e) => setDescriptionToUpdate(e.target.value)}
            required
          />
        </GroupFormContainer>

        <Button type="submit">Poster</Button>
      </StyledForm>
    </RightContainer>
  );
};

export default RightCardEdit;

RightCardEdit.propTypes = {
  project: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  setNewChange: PropTypes.func.isRequired,
  newChange: PropTypes.bool.isRequired,
};
