import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { productListReducer } from './reducer/productReducer'

const reducer = combineReducers({
  productList: productListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(initialState, reducer, applyMiddleware(...middleware))

export default store