export const setCollectionsModel = (array) => {
  return {
    type: "SET",
    payload: array,
  };
};

export const markFront = (collectionTitle, refString) => {
  console.log("Hello from actions", refString);
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
