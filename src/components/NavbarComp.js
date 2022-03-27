import React, { Component } from 'react';
import { Navbar, Container, Nav , NavDropdown } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import Home from './Home';
  import About from './About';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router> 
            <div>
                <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">SoftServe</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
        <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
            <div>
            <Routes>
            <Route path="/">
          <Home />
        </Route>
            <Route path="/about">
          <About />
        </Route>
                </Routes>
            </div>
            </Router>
            
        )
    }
}