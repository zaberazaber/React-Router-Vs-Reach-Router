import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Router, Link } from "@reach/router";


const Navigation = () => {
    return <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="#home">React-Routing</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <NavDropdown title="URL-Params" id="collasible-nav-dropdown">
          <NavDropdown.Item >
            <Link to="/users/ID123">USER-1</Link>
          </NavDropdown.Item>
          <NavDropdown.Item > 
            <Link to="/users/ID234">USER-2</Link>
          </NavDropdown.Item>
          <NavDropdown.Item > 
            <Link to="/users/ID345">USER-3</Link>
          </NavDropdown.Item>
          {/* <NavDropdown.Divider />
          <NavDropdown title="Nested-Routes" id="collasible-nav-dropdown">Nested-Routes</NavDropdown>
          <NavDropdown.Item href="#action/3.4">USER-1</NavDropdown.Item> */}

        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
}


export default Navigation;