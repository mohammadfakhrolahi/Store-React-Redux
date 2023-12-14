import React from 'react'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

import './Header.css'

const Header = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const amount = cartItems.reduce((acc, item) => acc + item.amount, 0)

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
                <i className="bi bi-bag-fill fs-5 position-relative">
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary ">
                    {amount}
                  </span>
                </i>
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
