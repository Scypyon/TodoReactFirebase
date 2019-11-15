import { db } from "firebase.js";

export const IS_FETCHING = "user:IS_FETCHING";
export const FETCHING_SUCCEED = "user:FETCHING_SUCCEED";
export const FETCHING_FAILED = "user:FETCHING_FAILED";

const isFetching = { type: IS_FETCHING };
const fetchingSucceed = data => ({
  type: FETCHING_SUCCEED,
  data
});
const fetchingFailed = error => ({ type: FETCHING_FAILED, error });

export const todoListFetchingDataAction = email => async dispatch => {
  try {
    dispatch(isFetching);
    const data = await db
      .collection(email)
      .get()
      .then(snap => snap.docs.map(el => ({ ...el.data(), id: el.id })));

    console.log(data);
    dispatch(fetchingSucceed(data));
  } catch (e) {
    dispatch(fetchingFailed(e));
  }
};
