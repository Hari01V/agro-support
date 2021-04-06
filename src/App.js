import './App.css';

import "firebase/auth";
import "firebase/firestore";

import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { FirebaseContext } from './Components/Firebase/context';

import SignIn from './Components/SignIn';
import ChatRoom from './Components/ChatRoom';
import SignOut from './Components/SignOut';

function App() {
  const { firebase } = useContext(FirebaseContext);
  const [user, loading, error] = useAuthState(firebase.auth);

  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
        <SignOut />
      </section>
    </div>
  );
}

export default App;
