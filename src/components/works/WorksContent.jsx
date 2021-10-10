import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WorkCard from './WorkCard';
import { getProjectsFromApi } from '../../API/_requestApi';

const WorksContent = ({ newChange, edit, setNewChange }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProjects = async () => {
    const result = await getProjectsFromApi();
    setProjects(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, [newChange]);

  return (
    !isLoading && (
      <CardsContainer>
        {projects
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <WorkCard
              key={project.id}
              project={project}
              edit={edit}
              setNewChange={setNewChange}
              newChange={newChange}
            />
          ))}
      </CardsContainer>
    )
  );
};

export default WorksContent;

WorksContent.propTypes = {
  setNewChange: PropTypes.func.isRequired,
  newChange: PropTypes.bool.isRequired,
  edit: PropTypes.bool.isRequired,
};

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 90%;
  @media (max-width: 768px) {
    justify-content: center
    height: auto;
  }
`;
