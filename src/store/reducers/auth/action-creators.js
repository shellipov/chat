import { authUser } from "../../../api/api";
import { START_AUTH, SUCCESSFUL_AUTH, ERROR_AUTH, LOGOUT } from "./actionTypes";
export const AuthActionCreators = {
  srartAuth: () => ({
    type: START_AUTH,
  }),

  seccessAuth: (user) => ({
    type: SUCCESSFUL_AUTH,
    payload: user,
  }),

  errorAuth: (error) => ({
    type: ERROR_AUTH,
    payload: error,
  }),

  logout: () => ({
    type: LOGOUT,
  }),

  login: (userData) => async (dispatch) => {
    try {
      dispatch(AuthActionCreators.srartAuth());
      const response = await authUser(userData);
      const data = response.data
      if (data.auth) {
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("username", JSON.stringify(data.user));
        dispatch(AuthActionCreators.seccessAuth(data.user));
      } else {
        dispatch(AuthActionCreators.errorAuth("Неверный логин или пароль"));
      }
    } catch (error) {
      dispatch(AuthActionCreators.errorAuth(error));
    }
  },
};
