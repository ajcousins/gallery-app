const basket = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const stateCopy = [...state];
      const index = stateCopy.findIndex(
        (el) => el.item === action.payload.title
      );
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
          },
        ];

    case "REMOVE_FROM_BASKET":
      return { action: "Remove item from basket" };

    default:
      return state;
  }
};

export default basket;
