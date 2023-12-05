import React from 'react'
import { Toast } from 'react-bootstrap'

const CartToast = ({ productName, showToast, handleClose, redirectTo }) => {
  return (
    <Toast
      show={showToast}
      style={{
        position: 'absolute',
        top: 70,
        right: 10,
      }}
    >
      <Toast.Header closeButton={false}>
        <strong className="me-auto">{productName} added to Cart</strong>
      </Toast.Header>
      <Toast.Body>
        <button type="button" onClick={redirectTo} className="btn btn-primary btn-sm me-2">
          Open cart
        </button>
        <button
          type="button"
          onClick={handleClose}
          
          className="btn btn-secondary btn-sm"
          data-bs-dismiss="toast"
        >
          Close
        </button>
      </Toast.Body>
    </Toast>
  )
}

export default CartToast
