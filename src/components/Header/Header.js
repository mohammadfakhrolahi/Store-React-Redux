import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar className='bg-dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>FC Market</Navbar.Brand>
          <Nav>
            <Nav.Link href='/cart'>Cart</Nav.Link>
            <Nav.Link href='/account'>Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header