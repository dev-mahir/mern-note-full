import {
  LOADER_START,
  LOADER_STOP,
  RE_LOADER_START,
  RE_LOADER_STOP,
} from "./actionType";
import { initialState } from "./initialState";

const loaderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADER_START:
      return {
        isLoader: true,
      };
    case LOADER_STOP:
      return {
        isLoader: false,
      };
    case RE_LOADER_START:
      return {
        refreshLoader: true,
      };
    case RE_LOADER_STOP:
      return {
        refreshLoader: false,
      };

    
    default:
      return state;
  }
};

export default loaderReducer;
