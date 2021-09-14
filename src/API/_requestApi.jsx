/* eslint-disable no-console */
import firebase from '../utils/FirebaseConfig';

export const getProjectsFromApi = async () => {
  const query = await firebase.firestore().collection('works').get();
  const result = [];
  if (!query.empty) {
    query.forEach((doc) => {
      result.push(doc.data());
    });
  }
  return result;
};

export const getProjetDetailsFromApi = async (id) => {
  try {
    const doc = await firebase.firestore().collection('works').doc(id).get();
    if (doc.exists) {
      console.log('Document data:', doc.data());
      return doc;
    }
    // doc.data() will be undefined in this case
    console.log('No such document!');
    return doc;
  } catch (error) {
    console.log('Error getting document:', error);
    return error;
  }
};

export const postNewProjectToApi = async (id, work) => {
  return firebase
    .firestore()
    .collection('works')
    .doc(id)
    .set(work)
    .then(() => {
      console.log('Project successfully written!');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
};

export const deleteProjectToApi = async (id) => {
  try {
    await firebase.firestore().collection('works').doc(id).delete();
    console.log('Project successfully deleted!');
  } catch (error) {
    console.error('Error removing document: ', error);
  }
};

export const updateProjectToApi = (id, work) => {
  return firebase.firestore().collection('works').doc(id).update(work);
};

export const generateId = () => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let newId = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 20; i++) {
    newId += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return newId;
};
