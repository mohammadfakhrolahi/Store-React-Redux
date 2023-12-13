import axios from 'axios'

// Add to cart
export const addToCart = (id, counter) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)

  dispatch({
    type: 'CART_ITEM_ADD',
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      amount: counter,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// Update cart item amount
export const updateCartItemAmount =
  (productId, amount) => (dispatch, getState) => {
    dispatch({
      type: 'CART_UPDATE_ITEM_AMOUNT',
      payload: { productId, amount },
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }

  // Remove item from cart
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: 'CART_REMOVE_ITEM',
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
