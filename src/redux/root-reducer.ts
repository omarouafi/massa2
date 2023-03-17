import { combineReducers } from "redux";
import ecosystemReducer from "./ecosystem/ecosystem-reducer";
import footerReducer from "./footer/footer-reducer";

const rootReducer = combineReducers({
  footer: footerReducer,
  ecosystem: ecosystemReducer,
});

export default rootReducer;
