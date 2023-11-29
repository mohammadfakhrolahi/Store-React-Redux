import React, { useEffect, useState } from 'react'
import {  Row, Col } from 'react-bootstrap'
import axios from 'axios'

import Product from '../../components/Product/Product'

import './Home.css'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const sendRequest = (async () => {
      const response = await axios.get('http://localhost:8000/api/products')

      setProducts(response.data)
    })

    sendRequest()
  }, [])

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
