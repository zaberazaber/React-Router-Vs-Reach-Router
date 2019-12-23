import React from 'react';
import './App.css';
import Home from './homeComponent';
import Dashboard from './dashboardComonent';
import {  Router } from "@reach/router";
import Navbar from "./navComponent";
import Users from './userComponent';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Router>
       <Home path="home" />
       <Dashboard path="/dashboard"/>
       <Users path="/users/:userId" />
       </Router>
      </header>
    </div>

  );
}

export default App;
