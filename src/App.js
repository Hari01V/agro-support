import './App.css';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  //INITIALIZE IT WITH FIREBASE CONFIG

});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user, loading, error] = useAuthState(auth);
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

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const dummy = useRef();
  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setformValue] = useState('');
  const changeFormValue = (evt) => {
    setformValue(evt.target.value);
  }

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(formValue.match(/^\s*$/));
    if (!formValue.match(/^\s*$/)) {
      const { uid } = auth.currentUser;
      await messageRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid
      })
    }
    setformValue('');

    dummy.current.scrollIntoView({ behaviour: "smooth" });
  }
  return (
    <>
      <main>
        <div>
          {messages && messages.map(msg => <ChatMsg key={msg.id} message={msg} />)}
        </div>
        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input type="text" value={formValue} onChange={changeFormValue} />
        <button type="submit">Send</button>
      </form>
    </>
  )
}

function ChatMsg(props) {
  const { text, uid } = props.message;
  const msgClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';

  return (
    <div className={`message ${msgClass}`}>
      <p>{text}</p>
    </div>
  )
}

export default App;
