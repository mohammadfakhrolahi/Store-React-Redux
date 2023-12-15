import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import './Product.css'

const Product = ({ product }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      className="link-underline link-underline-opacity-0"
    >
      <Card className="h-100 shadow-sm">
        <Card.Img src={product.image} alt={product.name} title={product.name} />

        <Card.Body>
          <Card.Title className="text-body">{product.name}</Card.Title>
          <Card.Text className="text-body-secondary">{product.info}</Card.Text>
        </Card.Body>

        <Card.Footer className="bg-transparent border-0">
          <Card.Title className="text-body">${product.price}</Card.Title>
        </Card.Footer>
      </Card>
    </Link>
  )
}

export default Product
