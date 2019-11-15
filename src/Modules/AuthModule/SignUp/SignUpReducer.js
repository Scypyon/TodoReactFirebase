import {
  IS_ADDING,
  USER_ADDED_SUCCEED,
  USER_ADDED_FAILED
} from "./SignUpAction";

const initState = { userInfo: "", error: "", isAdded: false };

export const userSignUpReducer = (state = initState, action) => {
  switch (action.type) {
    case IS_ADDING:
      return { ...state, isAdded: false };
    case USER_ADDED_SUCCEED:
      return {
        ...state,
        userInfo: "created",
        isAdded: true
      };
    case USER_ADDED_FAILED:
      return {
        ...state,
        error: "Something wrong...",
        isAdded: false
      };
    default: {
      return state;
    }
  }
};
