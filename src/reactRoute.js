import React from 'react';
import './reachRoute.css';
import Home from './homeComponent';
import Dashboard from './dashboardComonent';
import Navbar from "./navComponent";
import Users from './userComponent';
// import {  Router } from "@reach/router";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Fusion from './useParams'




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
                        <Route path="/users/:userId" component={Users} />
                    </Switch>

                    {/* <Switch> */}
                        {/* Using the `component` prop */}
                        {/* <Route path="/blog/:paramValue" component={Fusion} /> */}

                        {/* Using the `render` prop */}
                        {/* <Route
                            path="/posts/:paramValue"
                            render={({ match }) => <Fusion match={match} />}
                        />
                    </Switch> */}
                    
                    {/* when using props useParams */}
                    <Switch>
                        <Route path="/posts/:paramValue">
                            <Fusion />
                        </Route>
                    </Switch>

                    {/* ------------------- ⭕ 【ＲＥＡＣＴ】 ⭕   ------------------- */}




                </Router>
            </header>
        </div>

    );
}

export default ReactApp;



