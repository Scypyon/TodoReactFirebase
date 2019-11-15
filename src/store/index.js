import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { userSignUpReducer } from "Modules/AuthModule/SignUp/SignUpReducer";
import { userLogInReducer } from "Modules/AuthModule/LogIn/LogInReducer";
import { todoListFetchingDataReducer } from "Modules/TodoList/TodoListFetchingDataReducer";

const reducers = combineReducers({
  userSignUp: userSignUpReducer,
  userLogIn: userLogInReducer,
  todoList: todoListFetchingDataReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
