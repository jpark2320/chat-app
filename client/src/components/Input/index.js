import React from 'react';

import './styles.css';

const Input = ({ message, setMessage, sendMessage }) => (
  <form className='form'>
    <input
      className='input'
      type='text'
      placeholder='Type a message'
      value={message}
      onChange={e => setMessage(e.target.value)}
      onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
    />
    <input
      type='submit'
      value='Send'
      className='send-button'
      onClick={e => sendMessage(e)}
    ></input>
  </form>
);

export default Input;
