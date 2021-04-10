import React, { useContext } from 'react';
import { FirebaseContext } from './Firebase/context';

import '../styles/ChatMsg.css';

function ChatMsg(props) {
  const { firebase } = useContext(FirebaseContext);

  const { message, sender } = props;
  const msgClass = sender === firebase.auth.currentUser.uid ? 'sent' : 'recieved';

  return (
    <div className={`message ${msgClass}`}>
      <span>{message}</span>
    </div>
  )
}

export default ChatMsg;