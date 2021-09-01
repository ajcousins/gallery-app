export const setCollectionsModel = (array) => {
  return {
    type: "SET",
    payload: array,
  };
};

export const markFront = (collectionTitle, refString) => {
  return {
    type: "MARK_FRONT",
    payload: { collectionTitle, refString },
  };
};

export const setNewCollection = (title) => {
  return {
    type: "SET_NEW_COLLECTION",
    payload: title,
  };
};

// BASKET ACTIONS
export const addToBasket = (payload) => {
  return {
    type: "ADD_TO_BASKET",
    payload: payload,
  };
};
export const removeFromBasket = (payload) => {
  return {
    type: "REMOVE_FROM_BASKET",
    payload: payload,
  };
};
