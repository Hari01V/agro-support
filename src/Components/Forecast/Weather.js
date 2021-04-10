import React from 'react';
import CitySelector from './components/CitySelector';
import './weather.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_KEY, API_BASE_URL} from './apiKeys';
import WeatherList from './components/WeatherList';
import Navbar from "../Layout/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const {data, error, isLoading, setUrl} = UseFetch();

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    
    <Container className="WApp">
      
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} />

      
      {getContent()}
    </Container>
  );
};

export default App;
