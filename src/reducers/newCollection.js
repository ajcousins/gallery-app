const newCollectionReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_NEW_COLLECTION":
      return action.payload;
    default:
      return state;
  }
};

export default newCollectionReducer;
