import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Product from '../../components/Product/Product'
import { productListAction } from '../../action/productAction'

import './Home.css'

const Home = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, products } = productList

  useEffect(() => {
    dispatch(productListAction())
  }, [dispatch])

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Row className="row-gap-4 ">
          {products.map((item) => {
            return (
              <Col key={item._id} xs={12} md={5} lg={4} xl={3}>
                <Product product={item} />
              </Col>
            )
          })}
        </Row>
      )}
    </div>
  )
}

export default Home
