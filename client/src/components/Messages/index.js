import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Message';

import './styles.css';

const Messages = ({ name, messages }) => (
  <ScrollToBottom className='messages'>
    {messages.map((message, i) => (
      <div key={i}>
        <Message name={name} message={message} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
