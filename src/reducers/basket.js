const basket = (state = [], action) => {
  const stateCopy = [...state];
  const index = stateCopy.findIndex((el) => el.item === action.payload.title);
  switch (action.type) {
    case "ADD_TO_BASKET":
      if (index > -1) {
        if (stateCopy[index].qty === 99) return state;
        stateCopy[index].qty += 1;
        return stateCopy;
      } else
        return [
          ...state,
          {
            item: action.payload.title,
            qty: 1,
            frontUrl: action.payload.frontUrl,
            price: action.payload.price,
          },
        ];

    case "UPDATE_BASKET_QTY":
      stateCopy[index].qty = Number(action.payload.qty);
      return stateCopy;

    case "DELETE_BASKET_ITEM":
      stateCopy.splice(index, 1);
      return stateCopy;

    default:
      return state;
  }
};

export default basket;
