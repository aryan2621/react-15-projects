const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREASE":
      let tempCart = state.cart.map((cardItem) => {
        if (cardItem.id === action.payload) {
          return { ...cardItem, amount: cardItem.amount + 1 };
        }
        return cardItem;
      });

      return { ...state, cart: tempCart };
    case "DECREASE":
      let tempCart2 = state.cart
        .map((cardItem) => {
          if (cardItem.id === action.payload) {
            return { ...cardItem, amount: cardItem.amount - 1 };
          }
          return cardItem;
        })
        .filter((cardItem) => cardItem.amount !== 0);
      return { ...state, cart: tempCart2 };
    case "GET_TOTALS":
      const { total, amount } = state.cart.reduce(
        (cardTotal, cardItem) => {
          const { price, amount } = cardItem;
          const itemTotal = price * amount;
          cardTotal.amount += amount;
          cardTotal.total += itemTotal;
          return cardTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      //   total = parseFloat(total.toFixed(2))
      return { ...state, total, amount };
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload,loading:false };
    default:
      return state;
  }
};
export default reducer;
