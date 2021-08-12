const collectionModelReducer = (state = [], action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "MARK_FRONT":
      const stateCopy = [...state];
      const index = stateCopy.findIndex(
        (i) => i.title === action.payload.collectionTitle
      );
      stateCopy[index].front = action.payload.refString;
      return stateCopy;
    default:
      return state;
  }
};

export default collectionModelReducer;
