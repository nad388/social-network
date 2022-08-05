import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const dialogsData = [
  { id: 1, name: 'Lora Palmer' },
  { id: 2, name: 'Dale Cooper' },
  { id: 3, name: 'Liland Palmer' },
  { id: 4, name: 'Doppelganger' },
  { id: 5, name: 'Donna' },
  { id: 6, name: 'Lady with log' },
];

export const messagesData = [
  { id: 1, message: 'I am dead!?' },
  { id: 2, message: 'Who killed Lora Palmer?' },
  { id: 3, message: 'I killed my daughter!' },
  { id: 4, message: 'My name is Cooper.' },
  { id: 5, message: 'Where I am?' },
  { id: 6, message: 'My log always tells the truth.' },
];

export const postsData = [
  { id: 1, message: 'I am dead!?', likesCount: 5 },
  { id: 2, message: 'Who killed Lora Palmer?', likesCount: 25 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
