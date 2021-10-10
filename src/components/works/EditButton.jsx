import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContainerFlexRow } from '../../styles/_containers';

const EditButton = ({ setEdit, edit }) => {
  return (
    <EditContainer>
      <button type="button" onClick={() => setEdit(!edit)}>
        Edit
      </button>
    </EditContainer>
  );
};

export default EditButton;

EditButton.propTypes = {
  setEdit: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
};

const EditContainer = styled(ContainerFlexRow)`
  margin-top: 1rem;
`;
