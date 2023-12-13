export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'CART_ITEM_ADD':
      const newItem = action.payload

      const existingItem = state.cartItems.find(
        (item) => item.product === newItem.product
      )

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === existingItem.product
              ? { ...item, amount: item.amount + newItem.amount }
              : item
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, amount: newItem.amount }],
        }
      }

    case 'CART_UPDATE_ITEM_AMOUNT':
      const { productId, amount } = action.payload

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.product === productId ? { ...state, amount } : item
        ),
      }

    case 'CART_REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.product !== action.payload),
      }

    default:
      return state
  }
}
