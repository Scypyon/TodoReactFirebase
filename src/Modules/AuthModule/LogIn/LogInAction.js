import { auth } from "firebase.js";

export const TRYING_TO_LOGIN = "user:IS_TRYING_TO_LOGIN";
export const USER_LOGGED = "user:USER_LOGGED";
export const USER_LOGIN_FAILED = "user:USER_LOGIN_FAILED";

const tryingToLogIn = { type: TRYING_TO_LOGIN };
const userLogged = {
  type: USER_LOGGED
};
const userLogInFailed = error => ({ type: USER_LOGIN_FAILED, error });

export const LogInUserAction = userParams => async dispatch => {
  try {
    dispatch(tryingToLogIn);
    await auth.signInWithEmailAndPassword(
      userParams.email,
      userParams.password
    );
    dispatch(userLogged);
  } catch (e) {
    dispatch(userLogInFailed(e));
  }
};
