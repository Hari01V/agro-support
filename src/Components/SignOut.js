import React, { useContext } from 'react';
import { FirebaseContext } from './Firebase/context';

function SignOut() {
  const { firebase } = useContext(FirebaseContext);

  return firebase.auth.currentUser && (
    <button onClick={firebase.signOut}>Sign Out</button>
  )
}

export default SignOut;