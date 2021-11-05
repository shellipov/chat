import {
  START_GET_USERNAME,
  SUCCESSFUL_GET_USERNAME,
  ERROR_GET_USERNAME,
  SET_WS_CONNECTION,
  SET_CHAT_MESSAGES,
  SET_WS_ERROR,
} from "./actionTypes";

const init = {
  recipient_username: [],
  loading: false,
  error: null,
  connection: false,
  messages: [],
  ws_error: null,
};

export default function reducer(state = init, action) {
  switch (action.type) {

    case START_GET_USERNAME:
      return {
        ...state,
        loading: true,
        recipient_username: [],
        error: null,
      };

    case SUCCESSFUL_GET_USERNAME:
      return {
        ...state,
        loading: false,
        recipient_username: action.payload,
        error: null,
      };

    case ERROR_GET_USERNAME:
      return {
        ...state,
        loading: false,
        recipient_username: [],
        error: action.payload,
      };

    case SET_WS_CONNECTION:
      return {
        ...state,
        connection: action.payload,
      };

    case SET_CHAT_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };

    case SET_WS_ERROR:
      return {
        ...state,
        ws_error: action.payload,
      };

    default:
      return state;
  }
}
