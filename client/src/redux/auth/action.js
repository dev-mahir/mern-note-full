import axios from "axios";
import {
  loader_start,
  loader_stop,
  re_loader_start,
  re_loader_stop,
} from "../loader/action";
import { LOGOUT, LOG_IN_SUCCESS, MESSAGE, UPDATE_USER } from "./actionType";



// user login
export const user_login = (data, navigate, setInput) => async (dispatch) => {
  try {
    dispatch(re_loader_start());
    await axios
      .post("/api/v1/user/login", data)
      .then((res) => {
        setInput({ email: "", password: "" });
        dispatch({ type: LOG_IN_SUCCESS, payload: res.data.user });
        dispatch(re_loader_stop());
        navigate("/feed");
      })
      .catch((error) => {
        dispatch({ type: MESSAGE, payload: error.response.data.message });
        dispatch(re_loader_stop());
      });
  } catch (error) {
    console.log(error);
    dispatch(re_loader_stop());
  }
};




// check user token
export const token_user = (token) => async (dispatch) => {
  try {
    await axios
      .get("/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: LOG_IN_SUCCESS, payload: res.data.user });
      })
      .catch((error) => {
        dispatch(user_logout());
      });
  } catch (error) {
    dispatch(user_logout());
  }
};

// update user
export const update_user = (id, data, setInput, hide) => async (dispatch) => {
  dispatch(loader_start());
  try {
    await axios
      .put(`/api/v1/user/profile-update/${id}`, data)
      .then((res) => {
        dispatch({ type: UPDATE_USER, payload: res.data.user });
        setInput("");
        hide(false);
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

// user logout
export const user_logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
