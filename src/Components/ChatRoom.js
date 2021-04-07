import React, { useState, useContext, useRef } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import { FirebaseContext } from './Firebase/context';
import ChatMsg from './ChatMsg';
import '../styles/ChatRoom.css';

function ChatRoom(props) {
  const { chatUser } = props;

  const { firebase } = useContext(FirebaseContext);

  const dummy = useRef();
  // const messageRef = firebase.firestore.collection('messages');
  // const query = messageRef.orderBy('createdAt').limit(25);
  // const [messages] = useCollectionData(query, { idField: 'id' });
  let chat = firebase.myChats.find(chat => chat.otherUser === chatUser.uid);
  // chat has docId, otherUser
  if (!chat) {
    chat = {
      docId: "CHAT_NOT_FOUND"
    }
  }
  const messageRef = firebase.firestore.collection('Chats').doc(chat.docId).collection('messages');
  const [messages] = useCollectionData(messageRef, { idField: 'id' });

  const [formValue, setformValue] = useState('');
  const changeFormValue = (evt) => {
    setformValue(evt.target.value);
  }

  const sendMessage = async (e) => {
    //   e.preventDefault();
    //   if (!formValue.match(/^\s*$/)) {
    //     const { uid } = firebase.auth.currentUser;
    //     await messageRef.add({
    //       text: formValue,
    //       createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
    //       uid
    //     })
    //   }
    //   setformValue('');

    dummy.current.scrollIntoView({ behaviour: "smooth" });
  }

  return (
    chatUser.uid ?
      (<div className="ChatRoom">
        <div className="ChatRoom-header">
          <div className="User-info">
            <img src={chatUser.picUrl} className="User-pic" />
            <h1 className="User-name">{chatUser.name}</h1>
          </div>
          <div className="options">
            <MoreVertIcon />
          </div>
        </div>
        <main>
          <div>
            {messages && messages.map(msg => <ChatMsg key={msg.id} message={msg.data} sender={msg.sender} />)}
          </div>
          <div ref={dummy}></div>
        </main>

        <form onSubmit={sendMessage}>
          <input type="text" value={formValue} onChange={changeFormValue} />
          <button type="submit">Send</button>
        </form>
      </div>) :
      (<>
      </>)
  )
}

export default ChatRoom;