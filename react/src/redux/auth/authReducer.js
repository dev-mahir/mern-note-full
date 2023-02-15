import Cookies from "js-cookie";
import { LOGOUT, LOG_IN_SUCCESS, MESSAGE, UPDATE_USER } from "./actionType";
import { initialState } from "./initialState";

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: payload,
      };
    
    
    case LOGOUT:
      Cookies.remove('authToken');
      window.location.href = "/login";
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    case MESSAGE:
      return {
        ...state,
        message: payload
      };
    
    

    default:
      return state;
  }
};

export default authReducer;
