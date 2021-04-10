import React, { useState, useContext } from "react";
import "./dashboard.css";
import { FirebaseContext } from './Firebase/context';


const Dashboard = () => {

  const { firebase } = useContext(FirebaseContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [vegetable, setVegetable] = useState("");
  const [weight, setWeight] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    firebase.firestore.collection("market")
      .add({
        name: name,
        email: email,
        location:location,
        destination:destination,
        vegetable:vegetable,
        wiight:weight,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setLocation("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 style={{marginTop:"10px"}}>SEND INFO FOR SELLING ✔✔</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Location</label>
      <input
        placeholder="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      ></input>

    <label>Destination</label>
      <input
        placeholder="destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      ></input>

     <label>Vegetables</label>
      <input
        placeholder="vegetables"
        value={vegetable}
        onChange={(e) => setVegetable(e.target.value)}
      ></input>
       <label>Weight</label>
      <input
        placeholder="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      ></input>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Dashboard;