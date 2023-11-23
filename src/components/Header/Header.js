import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar className="bg-dark fixed-top" variant="dark">
        <Container>
          <Navbar.Brand href="/">FC Market</Navbar.Brand>
          <Nav>
            <Nav.Link href="/cart">
              <i className="bi bi-bag-fill fs-5 "></i>
            </Nav.Link>
            <Nav.Link href="/account">
              <i className="bi bi-person-circle fs-5"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
