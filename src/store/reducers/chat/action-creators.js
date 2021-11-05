import { getUsername } from "../../../api/api";
import {
  START_GET_USERNAME,
  SUCCESSFUL_GET_USERNAME,
  ERROR_GET_USERNAME,
  SET_WS_CONNECTION,
  SET_CHAT_MESSAGES,
  SET_WS_ERROR,
} from "./actionTypes";

export const ChatActionCreators = {
  startGetUsername: () => ({
    type: START_GET_USERNAME,
  }),

  seccessGetUsername: (user) => ({
    type: SUCCESSFUL_GET_USERNAME,
    payload: user,
  }),

  errorGetUsername: (error) => ({
    type: ERROR_GET_USERNAME,
    payload: error,
  }),

  getUsernameData: (id) => async (dispatch) => {
    try {
      dispatch(ChatActionCreators.startGetUsername());
      const response = await getUsername(id);
      const data = response.data;
      if (data) {
        dispatch(ChatActionCreators.seccessGetUsername(data));
      } else {
        dispatch(
          ChatActionCreators.errorGetUsername(
            "Произошла ошибка, попробуйте позже"
          )
        );
      }
    } catch (error) {
      dispatch(ChatActionCreators.errorGetUsername(error));
    }
  },

  setWSConnection: (status) => ({
    type: SET_WS_CONNECTION,
    payload: status,
  }),

  setChatMessages: (messges) => ({
    type: SET_CHAT_MESSAGES,
    payload: messges,
  }),

  setWSError: (error) => ({
    type: SET_WS_ERROR,
    payload: error,
  }),


  
};
