import {
  LOADER_START,
  LOADER_STOP,
  RE_LOADER_START,
  RE_LOADER_STOP,
} from "./actionType";



export const loader_start = () => (dispatch) => {
  dispatch({ type: LOADER_START });
};

export const loader_stop = () => (dispatch) => {
  dispatch({ type: LOADER_STOP });
};

export const re_loader_start = () => (dispatch) => {
  dispatch({ type: RE_LOADER_START });
};

export const re_loader_stop = () => (dispatch) => {
  dispatch({ type: RE_LOADER_STOP });
};
