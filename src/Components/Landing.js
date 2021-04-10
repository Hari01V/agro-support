import React,  { useContext } from 'react';
import { Link } from "react-router-dom";
import { Container,Button } from "semantic-ui-react";
import '../styles/Landing.css';
import { FirebaseContext } from './Firebase/context';

const Landing = () => {
    const { firebase } = useContext(FirebaseContext);
  return (
    <>
    <div className="landing">
     
      <p style={{ color: "black", fontFamily: "fantasy", fontSize: "4rem",marginTop:"20px" }}>
       AGRO-SUPPORT
      </p>
      
        <Container>
          <Button primary  style={{ margin: "1%",marginTop:"100px" }} onClick={firebase.signInWithGoogle}>
            Sign-in as farmer
          </Button>
          <Button secondary  style={{ margin: "1%",marginTop:"100px" }} onClick={firebase.signInWithGoogle}>
            Sign-in as Trader
          </Button>
        </Container>

      </div>
      
    </>
  );
};

export default Landing;