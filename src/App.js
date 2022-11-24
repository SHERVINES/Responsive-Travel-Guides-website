import React from 'react';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom"
import "./App.css"
import Home from './components/pages/Home';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>

    <Route path="/" element={<Home/>} />
      
      </Routes>
    </>
  );
};

export default App;