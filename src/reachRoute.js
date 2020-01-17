import React from 'react';
import './reachRoute.css';
import Home from './homeComponent';
import Dashboard from './dashboardComonent';
import Navbar from "./navComponent";
import Users from './userComponent';
import Fusion from './useParams'
import Invoice from './invoice';
import { Router } from "@reach/router";
// import { BrowserRouter as Router } from 'react-router-dom'




function ReachApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Router>
          <Home path="home" />
          <Dashboard path="/dashboard" />
          <Users path="/users/:userId" />
          <Invoice path="/dashboard/invoices/:invoiceId" />
          <Fusion path="/blog/:paramValue" />
        </Router>
      </header>
    </div>

  );
}

export default ReachApp;



