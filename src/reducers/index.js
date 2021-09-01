import descriptionPanelReducer from "./descriptionPanel";
import collectionsModelReducer from "./collectionsModel";
import newCollectionReducer from "./newCollection";
import basketReducer from "./basket";
import { combineReducers } from "redux";

// Combines all reducers using combineReducers from redux.
const allReducers = combineReducers({
  descriptionPanel: descriptionPanelReducer,
  collectionsModel: collectionsModelReducer,
  newCollection: newCollectionReducer,
  basket: basketReducer,
});

export default allReducers;
