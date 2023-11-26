import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar className="bg-dark fixed-top" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="logo">FC Market</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="bi bi-bag-fill fs-5 "></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/account">
              <Nav.Link>
                <i className="bi bi-person-circle fs-5"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
