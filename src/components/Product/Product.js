import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className="h-100">
      <Link to={`/product/${product._id}`}>
        <a>
          <Card.Img src={product.image} />
        </a>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <a className="text-black link-underline link-underline-opacity-0">
            <Card.Title>{product.name}</Card.Title>
          </a>
        </Link>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0">
        <a href="#" className="btn btn-primary bg-black border-0">
          Add to cart
        </a>
      </Card.Footer>
    </Card>
  )
}

export default Product
