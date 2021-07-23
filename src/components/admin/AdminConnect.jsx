import React, { useContext, useEffect } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { useHistory } from 'react-router-dom';
import firebase from '../../utils/FirebaseConfig';
import { ContentContainer } from '../../styles/_containers';
import AdminContext from '../../context/AdminContext';
import { Button } from '../../styles/_features';

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
          <Button type="button" onClick={() => history.push('/')}>
            Portfolio
          </Button>
          <Button type="button" onClick={() => firebase.auth().signOut()}>
            Se déconnecter
          </Button>
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
