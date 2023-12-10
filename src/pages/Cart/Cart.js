import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import { cartAction, removeFromCart } from '../../action/cartAction'

import './Cart.css'

const Cart = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(cartAction(id))
    }
  }, [dispatch])

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <Container className="mt-5 min-vh-50">
      <div className="row row-cols-md-1 row-cols-lg-2">
        <div className="mb-4 col-lg-12">
          <h2>Cart Items</h2>
        </div>
        <div className="mb-4 col-lg-8">
          {cartItems.length === 0 ? (
            <h4>Cart is empty.</h4>
          ) : (
            cartItems.map((item) => (
              <div key={item.product}>
                <Row className="w-100 p-1 mb-3 bg-light mw-42 mh-7 rounded-3">
                  <Col className="" xs={3}>
                    <Card.Img
                      className="rounded-2"
                      variant="top"
                      src={item.image}
                    />
                  </Col>

                  <Col
                    xs={6}
                    className="d-flex flex-column justify-content-center align-items-start"
                  >
                    <Card.Title className="mb-3">{item.name}</Card.Title>
                    <Card.Text className="text-secondary">Amount: 1</Card.Text>
                  </Col>

                  <Col
                    xs={3}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <div>
                      <Card.Subtitle className="">${item.price}</Card.Subtitle>
                      <button  onClick={() => removeFromCartHandler(item.product)} type="button" className="btn">
                        <i className="bi bi-trash3-fill link-danger"></i>
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            ))
          )}
        </div>

        <div className="col-lg-4 d-flex justify-content-lg-end">
          <div>

          <div className="card order-summary">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>
              <div className="fw-medium mb-1 d-flex justify-content-between align-items-center">
                <p>Number of Items:</p>
                <p>3</p>
              </div>
              <div className="text-secondary">
                <hr />
              </div>
              <div className="fw-medium mb-1 d-flex justify-content-between align-items-center">
                <p>Total Price:</p>
                <p>${totalPrice}</p>
              </div>
              <div className="text-secondary mb-1 d-flex justify-content-between align-items-center">
                <p>Delivery:</p>
                <p>Free</p>
              </div>
              <Button className="w-100 mt-4" variant="dark">
                Checkout (${totalPrice})
              </Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Cart
