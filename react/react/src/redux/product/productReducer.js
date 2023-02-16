import { GET_ALL_PRODUCT } from "./actionType";
import { initialState } from "./initialState";

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: payload,
      };

   

    default:
      return state;
  }
};

export default productReducer;
