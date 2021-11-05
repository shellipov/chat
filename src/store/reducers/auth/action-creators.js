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
      console.log(data);
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
  // signin:
  //   (username: string, password: string, confirmPassword: string) =>
  //   async (dispatch: AppDispatch) => {
  //     try {
  //       if (password !== confirmPassword) {
  //         dispatch(AuthActionCreators.setError(`Пароли не совпадают`));
  //       } else {
  //         const { newUser, error }: { newUser?: IUser; error?: string } =
  //           await fakeApi.addUser(username, password);
  //         if (error) {
  //           dispatch(
  //             AuthActionCreators.setError(`Произошлa ошибка - ${error}`)
  //           );
  //         }
  //         if (newUser) {
  //           localStorage.setItem("isAuth", "true");
  //           localStorage.setItem("username", username);
  //           dispatch(AuthActionCreators.setUser(newUser));
  //           dispatch(AuthActionCreators.setIsAuth(true));
  //         }
  //       }
  //     } catch (error: any) {
  //       dispatch(
  //         AuthActionCreators.setError(
  //           `Произошлa ошибка - ${error.message ? error.message : null}`
  //         )
  //       );
  //     }
  //   },
};
