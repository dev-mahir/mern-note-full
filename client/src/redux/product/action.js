import axios from "axios";
import {
  loader_start,
  loader_stop,
} from "../loader/action";
import { GET_ALL_PRODUCT,} from "./actionType";




// update user
export const get_all_product = () => async (dispatch) => {
  dispatch(loader_start());
  try {
    await axios
      .get('/api/v1/products')
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCT, payload: res.data.products });
        dispatch(loader_stop());
      })
      .catch((error) => {
        console.log(error);
        dispatch(loader_stop());
      });
  } catch (error) {
    console.log(error);
    dispatch(loader_stop());
  }
};
