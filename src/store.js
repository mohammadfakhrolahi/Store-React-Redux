import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import {
  productListReducer,
  productDetailReducer,
} from './reducer/productReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
})

const initialState = {}

const middleware = [thunk]

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware
})

export default store
