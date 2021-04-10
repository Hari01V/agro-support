import React, { useRef } from 'react';
import '../styles/ChatMsgContainer.css';
import ChatMsg from './ChatMsg';

function ChatMsgContainer(props) {
  const { localMessages } = props;
  const dummy = useRef();

  // dummy.current.scrollIntoView({ behaviour: "smooth" });

  return (
    <main className="ChatMsgContainer">
      <div className="ChatMsgs">
        {localMessages && localMessages.map(msg => <ChatMsg key={msg.id} message={msg.data} sender={msg.sender} />)}
      </div>
      <div ref={dummy}></div>
    </main>
  )
}

export default ChatMsgContainer;