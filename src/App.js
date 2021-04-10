import './App.css';

import "firebase/auth";
import "firebase/firestore";

import React, { useContext, useState } from 'react';
import { FirebaseContext } from './Components/Firebase/context';

import { Route, Switch } from 'react-router-dom';

import ChatContainer from './Components/ChatContainer';

function App() {
  const { firebase } = useContext(FirebaseContext);

  return (
    <div className="App">
      <Switch>
        <Route exact />
      </Switch>
      <ChatContainer />
    </div>
  );
}

export default App;
