import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogInUserAction } from "./LogInAction";
import { useHistory } from "react-router-dom";

import {
  Wrapper,
  AuthorizationPanel,
  InputFields,
  AuthCnt,
  StyledInputSubmit
} from "shared/AuthPanelStyles";

export default function LogIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const user = useSelector(state => state.userLogIn);
  const history = useHistory();

  useEffect(() => {
    if (user.isLogged) {
      alert(`The user is ${user.userInfo}`);
      history.push("/todolist");
      localStorage.setItem("email", email);
    }
  }, [user]);

  const loginUser = e => {
    e.preventDefault();
    dispatch(LogInUserAction({ email, password }));
  };
  return (
    <Wrapper>
      <AuthorizationPanel>
        <AuthCnt onSubmit={e => loginUser(e)}>
          <InputFields
            placeholder="Email..."
            onChange={e => setEmail(e.target.value)}
            type="email"
          ></InputFields>
          <InputFields
            placeholder="Password..."
            onChange={e => setPassword(e.target.value)}
            type="password"
          ></InputFields>
          <StyledInputSubmit value="Log In" type="submit"></StyledInputSubmit>
        </AuthCnt>
      </AuthorizationPanel>
    </Wrapper>
  );
}
