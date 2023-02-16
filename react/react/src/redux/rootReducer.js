import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import loaderReducer from "./loader/loaderReducer";
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  product: productReducer,
});


export default rootReducer;





