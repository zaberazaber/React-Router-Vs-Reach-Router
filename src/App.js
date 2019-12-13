import React from 'react';
import './App.css';
import Home from './homeComponent';
import Dashboard from './dashboardComonent';
import {  Router } from "@reach/router";
import Navbar from "./navComponent";




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Router>
       <Home path="home" />
       <Dashboard path="/dashboard"/>
       </Router>
      </header>
    </div>

  );
}

export default App;
