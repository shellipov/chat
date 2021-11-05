import { getUsers } from "../../../api/api";
import {
  START_GET_USERS,
  SUCCESSFUL_GET_USERS,
  ERROR_GET_USERS,
} from "./actionTypes";

export const UsersActionCreators = {
  startGetUsers: () => ({
    type: START_GET_USERS,
  }),

  seccessGetUsers: (user) => ({
    type: SUCCESSFUL_GET_USERS,
    payload: user,
  }),

  errorGetUsers: (error) => ({
    type: ERROR_GET_USERS,
    payload: error,
  }),

  getUsersData: () => async (dispatch) => {
    try {
      dispatch(UsersActionCreators.startGetUsers());
      const response = await getUsers();
      const data = response.data;
      if (data) {
        dispatch(UsersActionCreators.seccessGetUsers(data));
      } else {
        dispatch(
          UsersActionCreators.errorGetUsers(
            "Произошла ошибка, попробуйте позже"
          )
        );
      }
    } catch (error) {
      dispatch(UsersActionCreators.errorGetUsers(error));
    }
  },
};
