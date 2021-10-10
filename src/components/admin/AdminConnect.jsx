import React, { useContext, useEffect } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { useHistory } from 'react-router-dom';
import firebase from '../../utils/FirebaseConfig';
import { ContentContainer } from '../../styles/_containers';
import AdminContext from '../../context/AdminContext';

const AdminConnect = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  const history = useHistory();

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      // List of OAuth providers supported.
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        disableSignUp: true, // empêche les nouveaux user de signup
      },
    ],
    callbacks: {
      signInSuccesssignInSuccessWithAuthResult: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsAdmin(!!user);
    });
  }, []);
  return (
    <ContentContainer>
      {isAdmin ? (
        <div>
          <button type="button" onClick={() => history.push('/')}>
            Portfolio
          </button>
          <button type="button" onClick={() => firebase.auth().signOut()}>
            Se déconnecter
          </button>
        </div>
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </ContentContainer>
  );
};

export default AdminConnect;
