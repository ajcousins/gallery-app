import descriptionPanelReducer from "./descriptionPanel";
import collectionsModelReducer from "./collectionsModel";
import { combineReducers } from "redux";

// Combines all reducers using combineReducers from redux.
const allReducers = combineReducers({
  descriptionPanel: descriptionPanelReducer,
  collectionsModel: collectionsModelReducer,
});

export default allReducers;
