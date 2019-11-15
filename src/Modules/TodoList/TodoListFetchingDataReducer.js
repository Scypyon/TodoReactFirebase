import {
  IS_FETCHING,
  FETCHING_SUCCEED,
  FETCHING_FAILED
} from "./TodoListFetchingDataAction";

const initState = { tasks: "", error: "", isFetching: true };

export const todoListFetchingDataReducer = (state = initState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, isFetching: true };
    case FETCHING_SUCCEED:
      return {
        ...state,
        tasks: action.data,
        isFetching: false
      };
    case FETCHING_FAILED:
      return {
        ...state,
        error: "Something wrong...",
        isFetching: true
      };
    default: {
      return state;
    }
  }
};
