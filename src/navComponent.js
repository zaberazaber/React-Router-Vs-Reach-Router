import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {  Link } from "@reach/router";
import './reachRoute.css';


const Navigation = () => {
    return <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="/">React/Reach-Routing</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <NavDropdown title="URL-Params" id="collasible-nav-dropdown">
          <ul className="navDrop">
            <Nav.Link className = "navdrop" href="/users/ID123">USER-1</Nav.Link>
            <Nav.Link className = "navdrop" href="/users/ID234">USER-2</Nav.Link>
            <Nav.Link className = "navdrop" href="/users/ID345">USER-3</Nav.Link>
          </ul>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="/blog/paramValue">useParams</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
}


export default Navigation;