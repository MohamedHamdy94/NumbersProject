import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const Logout=()=>{
    localStorage.removeItem('userInfo') 
window.location.reload()
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <h2 className="text-light">Numbers App</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-5 my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/"
              className="fs-5 mt-xxl-2 mt-lg-0  mt-xl-0 text-light "
            >
              <h4>Home</h4>
            </Nav.Link>
  
            <Nav.Link
              as={Link}
              to="/SearchResult"
              className="fs-5 mt-xxl-2 mt-lg-0  mt-xl-0 text-light "
            >
              <h4> History</h4>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/login"
              className="ps-5 mt-xxl-2 mt-lg-0  mt-xl-0 text-light "
            >
              <h4>Login</h4>
            </Nav.Link>
            <Nav.Link
              onClick={Logout} as={Link} 
              className=" mt-xxl-2 mt-lg-0  mt-xl-0 text-light "
            >
              <h4>Logout</h4>
            </Nav.Link>
            </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
