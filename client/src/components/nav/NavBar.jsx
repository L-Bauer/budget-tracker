import React from "react"
import Container from 'react-bootstrap/Container'
import { Nav, Navbar } from "react-bootstrap"

const TopNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link eventKey="1" href='/'>Home</Nav.Link>
          <Nav.Link eventKey="3" href="/budget">Budget</Nav.Link>
          <Nav.Link eventKey="2" href="/transaction">Transactions</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
};
  
export default TopNavBar