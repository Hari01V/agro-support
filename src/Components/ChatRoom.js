import React, { useState, useContext, useRef } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Firebase from "firebase/app";

import { FirebaseContext } from './Firebase/context';
import ChatMsg from './ChatMsg';

function ChatRoom() {
  const { firebase } = useContext(FirebaseContext);

  const dummy = useRef();
  const messageRef = firebase.firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setformValue] = useState('');
  const changeFormValue = (evt) => {
    setformValue(evt.target.value);
  }

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!formValue.match(/^\s*$/)) {
      const { uid } = firebase.auth.currentUser;
      await messageRef.add({
        text: formValue,
        createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
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

export default ChatRoom;