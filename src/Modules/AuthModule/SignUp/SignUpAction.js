import { auth } from "firebase.js";

export const IS_ADDING = "user:IS_ADDING";
export const USER_ADDED_SUCCEED = "user:USER_ADDED_SUCCEED";
export const USER_ADDED_FAILED = "user:USER_ADDED_FAILED";

const isAdding = { type: IS_ADDING };
const userAddedSucceed = {
  type: USER_ADDED_SUCCEED
};
const userAddedFailed = error => ({ type: USER_ADDED_FAILED, error });

export const SignUpUserAction = userParams => async dispatch => {
  try {
    dispatch(isAdding);
    await auth.createUserWithEmailAndPassword(
      userParams.email,
      userParams.password
    );
    dispatch(userAddedSucceed);
  } catch (e) {
    dispatch(userAddedFailed(e));
  }
};
