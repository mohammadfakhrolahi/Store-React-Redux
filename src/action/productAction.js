import axios from 'axios'

// Product list
export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_LIST-REQUEST' })

    const { data } = await axios.get('http://localhost:8000/api/products')

    dispatch({
      type: 'PRODUCT_LIST_SUCCESS',
      payload: data,
    })
  } catch (error) {
    console.log(error)
  }
}

// Product detail
export const productDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_DETAIL-REQUEST' })

    const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)

    dispatch({
      type: 'PRODUCT_DETAIL-SUCCESS',
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}