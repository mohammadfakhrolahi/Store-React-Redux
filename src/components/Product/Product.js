import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className="h-100">
      <a href="`/product/${product._id}`">
        <Card.Img src={product.image} />
      </a>
      <Card.Body>
        <a
          href="`/product/${product._id}`"
          className="text-black link-underline link-underline-opacity-0"
        >
          <Card.Title>{product.name}</Card.Title>
        </a>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <Card.Footer className='bg-transparent border-0'>
        <a href="#" className="btn btn-primary bg-black border-0">
          Add to cart
        </a>
      </Card.Footer>
    </Card>
  )
}

export default Product
