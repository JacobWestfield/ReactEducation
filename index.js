import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Message from './Message';


const MessageObj = {
  header: 'Hello world',
  text: 'This is my first React Application'
};

ReactDOM.render(
  <React.StrictMode>
    <Message data={MessageObj} />
  </React.StrictMode>,
  document.getElementById('root')
);


