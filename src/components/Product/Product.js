import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className="h-100">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          className="text-black link-underline link-underline-opacity-0"
        >
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>{product.info}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0">
        <Button href="#" className="btn btn-primary bg-black border-0" variant='dark'>
          Add to cart
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default Product
