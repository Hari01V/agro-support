import React, { useRef } from 'react';

import ChatMsg from './ChatMsg';

function ChatMsgContainer(props) {
  const { messages } = props;
  const dummy = useRef();

  return (
    <main className="ChatMsgContainer">
      <div>
        {messages && messages.map(msg => <ChatMsg key={msg.id} message={msg.data} sender={msg.sender} />)}
      </div>
      <div ref={dummy}></div>
    </main>
  )
}

export default ChatMsgContainer;