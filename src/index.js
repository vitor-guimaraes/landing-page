import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // VAI RODAR
import App from './App';
import reportWebVitals from './reportWebVitals'; // VAI RODAR
import Sobre from './pages/Sobre/index';
import Landing from './pages/landing/index';



ReactDOM.render(
  <React.StrictMode>
    {/* <Sobre></Sobre>
    <App></App> */}
    <Landing></Landing>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
