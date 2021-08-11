import descriptionPanelReducer from "./descriptionPanel";
import { combineReducers } from "redux";

// Combines all reducers using combineReducers from redux.
const allReducers = combineReducers({
  descriptionPanel: descriptionPanelReducer,
});

export default allReducers;
