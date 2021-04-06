import React, { useContext } from 'react';
import { FirebaseContext } from './Firebase/context';

function SignIn() {
  const { firebase } = useContext(FirebaseContext);

  return (
    <>
      <button onClick={firebase.signInWithGoogle}>Sign In With Google</button>
    </>
  );
}

export default SignIn;