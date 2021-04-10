import React, { } from 'react';
import '../styles/Landing.css';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SignIn from './SignIn';

function Landing() {


  return (
    <div className="Landing">
      <div className="Landing-navbar">
        NAVBARE HERE
        {/* NAVBAR HERE */}
        <div >
          login as FARMER
        <SignIn />
        </div>
        <div >
          login as TRADER
        <SignIn />
        </div>
      </div>

      <div className="main-container">
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <div className="jumbotron">
            <h1>Let Us Find the Optimal results for <span className="highlight">Your HardWork</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum justo eget elementum semper. Vestibulum ornare imperdiet lorem, sed rutrum elit venenatis sit amet.</p>
          </div>
        </Container>
      </div>
      <div className="Card-container">
        <Container style={{ display: "flex", justifyContent: "center" }} >
          <div className="card">
            <div className="filter"></div>
            <h2>SIGN IN AS <span className="highlight" >FARMER</span></h2>
            <p>Farmers can sell their stocks at good price</p>
            <a href="#" class="fancy-button bg-gradient1">
              <span><i class="fa fa-ticket"></i>Sign In</span></a>
          </div>
          <div className="card">
            <div className="filter"></div>
            <h2>SIGN IN AS <span className="highlight" style={{ color: "#ff7247" }}>TRADER</span></h2>
            <p>Traders can buy farm products easily and interact with farmers</p>
            <a href="#" class="fancy-button bg-gradient1">
              <span><i class="fa fa-ticket"></i>Sign In</span></a>
          </div>
        </Container>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default Landing;