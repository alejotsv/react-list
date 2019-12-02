import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import PersonalInfo from './components/PersonalInfo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <div>
  <h1>Below we have a component</h1>
  <PersonalInfo />
  </div>,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
