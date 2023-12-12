export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'CART_ITEM_ADD':
      const item = action.payload // New item

      const existingItem = state.cartItems.find(
        (i) => i.product === item.product
      )

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === existingItem.product
              ? { ...i, amount: i.amount + item.amount }
              : i
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, amount: item.amount }],
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
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      }

    default:
      return state
  }
}
