import React, { useContext } from 'react';
import { FirebaseContext } from './Firebase/context';

function ChatMsg(props) {
  const { firebase } = useContext(FirebaseContext);

  const { text, uid } = props.message;
  const msgClass = uid === firebase.auth.currentUser.uid ? 'sent' : 'recieved';

  return (
    <div className={`message ${msgClass}`}>
      <p>{text}</p>
    </div>
  )
}

export default ChatMsg;