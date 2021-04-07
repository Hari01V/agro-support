import './App.css';

import "firebase/auth";
import "firebase/firestore";

import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { FirebaseContext } from './Components/Firebase/context';

import SignIn from './Components/SignIn';
import ChatRoom from './Components/ChatRoom';
import UserList from './Components/UsersList';

function App() {
  const { firebase } = useContext(FirebaseContext);
  const [user, loading, error] = useAuthState(firebase.auth);

  const [chatUser, setChatUser] = useState({});

  return (
    <div className="App">
      <section className="Users-section">
        {user ? <UserList setChatUser={setChatUser} /> : <></>}
      </section>
      <section className="Chats-section">
        {user ? (chatUser.uid ? <ChatRoom chatUser={chatUser} /> : <></>) : <SignIn />}
      </section>
    </div>
  );
}

export default App;
