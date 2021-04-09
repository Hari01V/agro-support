import React, { useState, useContext, useRef, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import Firebase from 'firebase/app';

import { FirebaseContext } from './Firebase/context';
import '../styles/ChatRoom.css';
import ChatMsgContainer from './ChatMsgContainer';

import { fbConst } from '../helpers';

function ChatRoom(props) {
  const { chatUser, chat } = props;
  const { firebase } = useContext(FirebaseContext);
  const [messages, setMessages] = useState([false]);

  const getOurChats = async () => {
    const tmpmessages = [];
    fbConst.currChat = chat;
    await firebase.firestore.collection('Chats').doc(chat.docId).collection('messages')
      .orderBy("sentAt").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tmpmessages.push({
            id: doc.id,
            data: doc.data().data,
            sender: doc.data().sender
          });
        });
      });
    setMessages(tmpmessages);
    // dummy.current.scrollIntoView({ behaviour: "smooth" });
  }

  if (fbConst.currChat != chat) {
    getOurChats();
  }

  const [formValue, setformValue] = useState('');
  const changeFormValue = (evt) => {
    setformValue(evt.target.value);
  }
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!formValue.match(/^\s*$/)) {
      const { uid } = firebase.auth.currentUser;
      const messageRef = firebase.firestore.collection('Chats').doc(chat.docId).collection('messages');
      await messageRef.add({
        sender: uid,
        data: formValue,
        sentAt: Firebase.firestore.Timestamp.now()
      })
      getOurChats();
    }
    setformValue('');
    // dummy.current.scrollIntoView({ behaviour: "smooth" });
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
        {chat ?
          <ChatMsgContainer messages={messages} />
          : <></>}

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