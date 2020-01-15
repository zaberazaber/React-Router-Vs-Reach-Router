import React from 'react';
import './reachRoute.css';
import Home from './homeComponent';
import Dashboard from './dashboardComonent';
import Navbar from "./navComponent";
import Users from './userComponent';
// import {  Router } from "@reach/router";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'




function ReactApp() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <Router>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>


                    {/* ------------------- ❌  🅁🄴🄰🄲🄷   ❌   ------------------- */}

                    {/* <Users path="/users/:userId" /> */}

                    {/* ------------------- ❌  🅁🄴🄰🄲🄷   ❌   ------------------- */}




                    {/* ------------------- ⭕ 【ＲＥＡＣＴ】 ⭕   ------------------- */}

                    <Switch>
                     <Route path="/users/:userId" component= { Users } />
                    </Switch>

                    {/* ------------------- ⭕ 【ＲＥＡＣＴ】 ⭕   ------------------- */}

                </Router>
            </header>
        </div>

    );
}

export default ReactApp;



