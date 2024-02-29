const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        products: action.payload
      }
    // case "ADD_TO_CART":
    //   return {
    //     ...state,
    //     cartItems: [action.payload, ...state.cartItems],
    //   };
    case "REMOVE_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

  

    case "ADD_TO_CART":
      const updateIndex = state.cartItems.findIndex((currentItem) =>
        currentItem.id === action.payload.productItem.id)
        // console.log('cartitems..',cartItems)
        // console.log('update',updateIndex)

      if (updateIndex >= 0) {
        return {
          ...state,
          cartItems: state.cartItems.map((item, index) =>
            index === updateIndex ? { ...item, itemQuantity: item.itemQuantity + 1 } : item
          ),
          total: state.total + 1

        };
      }
      else {
        const tempProduct = { ...action.payload.productItem, itemQuantity: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, tempProduct],
          total: state.total + 1,
        }
       
       
      }
    


    case "INCREASE":

      const checkIndex = state.cartItems.findIndex((currentItem) => {
        return currentItem.id === action.payload.id
      })
      return {
        ...state,
        cartItems: state.cartItems.map((currentItem, index) =>
          index === checkIndex ? { ...currentItem, itemQuantity: currentItem.itemQuantity + 1 } : currentItem)
      }


    case "DECREASE":

      const checkItemIndex = state.cartItems.findIndex((currentItem) => {
        return currentItem.id === action.payload.id
      })
      return {
        ...state,
        cartItems: state.cartItems.map((currentItem, index) =>
          index === checkItemIndex ? {
            ...currentItem, itemQuantity: currentItem.itemQuantity > 1 ?
              currentItem.itemQuantity - 1 : 1
          } : currentItem)
      }





    default:
      return state
  }
}
export default ProductReducer