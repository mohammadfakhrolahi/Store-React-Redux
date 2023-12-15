import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import { addToCart, removeFromCart } from '../../action/cartAction'
import { updateCartItemAmount } from '../../action/cartAction'

import './Cart.css'

const Cart = () => {
  const { id } = useParams()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const dispatch = useDispatch()

  const handleIncrement = (id) => {
    const amountArr = cartItems.filter((item) => item.product === id)
    let amount = amountArr.map((item) => Number(item.amount))
    amount = amount[0] + 1

    dispatch(updateCartItemAmount(id, amount))
  }

  const handleDecrement = (id) => {
    const amountArr = cartItems.filter((item) => item.product === id)
    let amount = amountArr.map((item) => Number(item.amount))
    if (amount > 1) {
      amount = amount[0] - 1

      dispatch(updateCartItemAmount(id, amount))
    }
  }

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id))
    }
  }, [dispatch])

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  )

  const amount = cartItems.reduce((acc, item) => acc + item.amount, 0)

  // Remove product from cart
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
                    <Link to={`/product/${item.product}`}>
                      <Card.Img
                        className="rounded-2"
                        variant="top"
                        src={item.image}
                        alt={item.name}
                        title={item.name}
                      />
                    </Link>
                  </Col>

                  <Col
                    xs={6}
                    className="d-flex flex-column justify-content-center align-items-start"
                  >
                    <Link
                      to={`/product/${item.product}`}
                      className="link-underline link-underline-opacity-0 text-dark"
                    >
                      <Card.Title className="mb-3">{item.name}</Card.Title>
                    </Link>
                    <div
                      className="btn-group btn-group-sm me-2"
                      role="group"
                      aria-label="Small button group"
                    >
                      <Button
                        onClick={() => handleDecrement(item.product)}
                        className="btn-primary"
                        id={item.product}
                      >
                        <i className="bi bi-dash"></i>
                      </Button>
                      <p
                        className="px-3 m-0 text-dark bg-primary-subtle border d-flex align-items-center"
                        id={item.product}
                      >
                        {item.amount}
                      </p>
                      <Button
                        onClick={() => handleIncrement(item.product)}
                        className="btn-primary"
                        id={item.product}
                      >
                        <i className="bi bi-plus-lg"></i>
                      </Button>
                    </div>
                  </Col>

                  <Col
                    xs={3}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <div>
                      <Card.Subtitle className="">${item.price}</Card.Subtitle>
                      <button
                        onClick={() => removeFromCartHandler(item.product)}
                        type="button"
                        className="btn"
                      >
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
                  <p>{amount}</p>
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
