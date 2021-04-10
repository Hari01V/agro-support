import './App.css';
import Map from "./Components/Map";
import "firebase/auth";
import "firebase/firestore";

import React, { useContext, useState } from 'react';
import { FirebaseContext } from './Components/Firebase/context';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ChatContainer from './Components/ChatContainer';
import Dashboard from './Components/Dashboard';
import Weather from './Components/Forecast/Weather';
import Landing from './Components/Landing';
import Navbar from './Components/Layout/Navbar';

function App() {
  const { firebase } = useContext(FirebaseContext);

  return (<div>
     <Navbar />
    <div className="App">
     
      <Switch>
        <Route exact path="/chats"  component={ChatContainer}/>
        <Route exact path="/map" component={Map} />
        <Route exact path ="/forecast" component={Weather} /> 
        <Route exact path ="/" component={Landing} />
        <Route exact path='/dashboard' component={Dashboard} /> 
      </Switch>
      </div>
      
    </div>
  );
}

export default App;
