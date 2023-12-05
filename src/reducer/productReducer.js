// Product list
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST-REQUEST':
      return { loading: true, products: [] }
    case 'PRODUCT_LIST_SUCCESS':
      return { loading: false, products: action.payload }
    default:
      return state
  }
}

// Product detail
export const productDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case 'PRODUCT_DETAIL-REQUEST':
      return { loading: true, product: { ...state } }
    case 'PRODUCT_DETAIL-SUCCESS':
      return { loading: false, product: action.payload }
  }
  return state
}
