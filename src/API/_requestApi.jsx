/* eslint-disable no-console */
import axios from 'axios';

export const getProjectsFromApi = () => {
  return axios
    .get('https://glacial-everglades-04382.herokuapp.com/api/works')
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getProjetDetailsFromApi = (id) => {
  return axios
    .get(`https://glacial-everglades-04382.herokuapp.com/api/works/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const postNewProjectToApi = (obj) => {
  return axios
    .post('https://glacial-everglades-04382.herokuapp.com/api/works/', obj)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export const deleteProjectToApi = (id) => {
  return axios
    .delete(`https://glacial-everglades-04382.herokuapp.com/api/works/${id}`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export const updateProjectToApi = (id, obj) => {
  return axios
    .put(`https://glacial-everglades-04382.herokuapp.com/api/works/${id}`, obj)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
