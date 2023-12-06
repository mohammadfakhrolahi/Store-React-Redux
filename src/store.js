import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import {
  productListReducer,
  productDetailReducer,
} from './reducer/productReducer'

import { cartReducer } from './reducer/cartReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
})

const initialState = {}

const middleware = [thunk]

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware
})

export default store
