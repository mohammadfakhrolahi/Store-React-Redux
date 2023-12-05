import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Image, Button, Toast } from 'react-bootstrap'

import { productDetailAction } from '../action/productAction'
import Loading from '../components/Loading/Loading'

const Product = () => {
  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)
  const { loading, product } = productDetail

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

  useEffect(() => {
    dispatch(productDetailAction(id))
  }, [dispatch])

  const navigate = useNavigate()

  const addToCartHandler = () => {
    navigate(`/cart/${id}`)
    console.log('first')
  }

  // Check if product is undefined
  if (!product) {
    return <h2>Product not found!</h2>
  }

  return (
    <Container className="">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Link to="/" className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-chevron-left"></i> Back
          </Link>
          <Row className="mt-3">
            <Col xs={12} md={6}>
              <Image
                src={product.image}
                alt={product.name}
                className="img-fluid"
              />
            </Col>

            <Col xs={12} md={6} className="text-white">
              <h2 className="text-dark">{product.name}</h2>
              <p className="h4 text-body">${product.price}</p>
              <p className="text-body-secondary">{product.info}</p>

              <div className="d-flex align-items-center">
                <div
                  className="btn-group me-2"
                  role="group"
                  aria-label="First group"
                >
                  <Button onClick={handleDecrement} className="btn-primary">
                    <i className="bi bi-dash"></i>
                  </Button>
                  <p className="px-3 m-0 text-dark bg-primary-subtle border d-flex align-items-center">
                    {counter}
                  </p>
                  <Button onClick={handleIncrement} className="btn-primary">
                    <i className="bi bi-plus-lg"></i>
                  </Button>
                </div>
                <Button onClick={addToCartHandler} className="ml-3 btn-dark">
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
        </div>
      )}
    </Container>
  )
}

export default Product
