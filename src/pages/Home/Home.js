import React from 'react'
import {  Row, Col } from 'react-bootstrap'

import products from '../../products'
import Product from '../../components/Product/Product'

import './Home.css'

const Home = () => {
  return (
    <div>
      <Row className='row-gap-4 '>
        {products.map((item) => {
          return (
            <Col key={item._id} xs={12}  md={5} lg={4} xl={3}>
              <Product product={item} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Home
