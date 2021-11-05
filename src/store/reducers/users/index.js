import {
  START_GET_USERS,
  SUCCESSFUL_GET_USERS,
  ERROR_GET_USERS,
} from "./actionTypes";

const init = {
  users: [],
  loading: false,
  error: null,
};

export default function reducer(state = init, action) {
  switch (action.type) {

    case START_GET_USERS:
      return {
        ...state,
        loading: true,
        users: [],
        error: null,
      };

    case SUCCESSFUL_GET_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };

    case ERROR_GET_USERS:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
