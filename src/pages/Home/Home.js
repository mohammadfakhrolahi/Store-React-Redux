import React from 'react'
import { Row, Col } from 'react-bootstrap'

import products from '../../products'

import './Home.css'

const Home = () => {
  return (
    <div>
      <Row className='row-gap-3'>
        {products.map((item) => {
          return (
            <Col key={item._id}>
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary bg-black">
                    Add to cart
                  </a>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Home
