import React from 'react'
import { Container } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container className='min-vh-60 d-flex flex-column justify-content-center align-items-center'>
      <h1>404</h1>
      <h2>Page Not Found!</h2>
    </Container>
  )
}

export default NotFound