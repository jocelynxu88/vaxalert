import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from "./components/Form";

ReactDOM.render(
  <React.StrictMode>
    <Form />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

