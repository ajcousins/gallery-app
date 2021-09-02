const basket = (state = [], action) => {
  const stateCopy = [...state];
  const index = stateCopy.findIndex((el) => el.item === action.payload.title);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // const stateCopy = [...state];
      // const index = stateCopy.findIndex(
      //   (el) => el.item === action.payload.title
      // );
      if (index > -1) {
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
      // const stateCopy = [...state];
      // const index = stateCopy.findIndex(
      //   (el) => el.item === action.payload.title
      // )
      stateCopy[index].qty = action.payload.qty;
      return stateCopy;

    case "DELETE_BASKET_ITEM":
      stateCopy.splice(index, 1);
      return stateCopy;

    case "REMOVE_FROM_BASKET":
      return { action: "Remove item from basket" };

    default:
      return state;
  }
};

export default basket;
