import React, { useState } from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import products from '../products'

const Product = () => {
  const [counter, setCounter] = useState(1)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  const { id } = useParams()
  const product = products.find((item) => String(item._id) === id)

  // Check if product is undefined
  if (!product) {
    return <h2>Product not found!</h2>
  }

  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={6}>
          <Image src={product.image} alt={product.name} className="img-fluid" />
        </Col>

        <Col xs={12} md={6} className="text-white">
          <h2 className="text-dark">{product.name}</h2>
          <p className="h4 text-body">${product.price}</p>
          <p className="text-body-secondary">{product.description}</p>

          <div className="d-flex align-items-center">
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <Button onClick={handleDecrement} className="btn-secondary">
                <i className="bi bi-dash"></i>
              </Button>
              <p className="px-3 m-0 text-light bg-secondary d-flex align-items-center">
                {counter}
              </p>
              <Button onClick={handleIncrement} className="btn-secondary">
                <i className="bi bi-plus-lg"></i>
              </Button>
            </div>
            <Button className="ml-3 btn-dark">
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <div className="bg-light p-4 text-dark rounded-4">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Product