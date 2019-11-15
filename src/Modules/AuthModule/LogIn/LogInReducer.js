import { TRYING_TO_LOGIN, USER_LOGGED, USER_LOGIN_FAILED } from "./LogInAction";

const initState = { userInfo: "", error: "", isLogged: false };

export const userLogInReducer = (state = initState, action) => {
  switch (action.type) {
    case TRYING_TO_LOGIN:
      return { ...state, isLogged: false };
    case USER_LOGGED:
      return {
        ...state,
        userInfo: "logged",
        isLogged: true
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        error: "Something wrong...",
        isLogged: false
      };
    default: {
      return state;
    }
  }
};
