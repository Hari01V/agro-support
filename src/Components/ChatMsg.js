import React, { useContext } from 'react';
import { FirebaseContext } from './Firebase/context';

function ChatMsg(props) {
  const { firebase } = useContext(FirebaseContext);

  const { message, sender } = props;
  const msgClass = sender === firebase.auth.currentUser.uid ? 'sent' : 'recieved';

  return (
    <div className={`message ${msgClass}`}>
      <p>{message}</p>
    </div>
  )
}

export default ChatMsg;