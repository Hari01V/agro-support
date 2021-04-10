import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import Firebase from './Components/Firebase/Firebase';
import { FirebaseContext } from './Components/Firebase/context';

const firebase = new Firebase();
firebase.auth.onAuthStateChanged(user => {
  if (user != null) {
    console.log("SOMEONE LOGGED IN");
    firebase.getMyChats();
    console.log(user);
  } else {
    console.log("NO ONE LOGGED IN");
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContext.Provider value={{ firebase: firebase }}>
        <App />
      </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
