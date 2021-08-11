const descriptionPanel = (state = false, action) => {
  switch (action.type) {
    case "ACTIVE":
      return !state;
    default:
      return state;
  }
};

export default descriptionPanel;
