import {
  START_AUTH,
  SUCCESSFUL_AUTH,
  ERROR_AUTH,
  LOGOUT,
} from "./actionTypes";

const init = {
  isAuth: localStorage.getItem('isAuth') || false,
  user: JSON.parse(localStorage.getItem('username')) || null,
  loading: false,
  error: null,
};

export default function reducer(state = init, action) {
  switch (action.type) {

    case START_AUTH:
      return {
        ...state,
        loading: true,
        isAuth: false,
        user: null,
        error: null,
      };

    case SUCCESSFUL_AUTH:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload,
        error: null,
      };

    case ERROR_AUTH:
      return {
        ...state,
        loading: false,
        isAuth: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT:
      localStorage.removeItem("isAuth");
      localStorage.removeItem("username");
      return {
        ...state,
        isAuth: false,
        user: null,
      };

    default:
      return state;
  }
}
