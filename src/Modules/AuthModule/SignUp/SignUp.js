import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SignUpUserAction } from "./SignUpAction";

import {
  Wrapper,
  AuthorizationPanel,
  AuthCnt,
  InputFields,
  StyledInputSubmit
} from "shared/AuthPanelStyles";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => state.userSignUp);

  useEffect(() => {
    if (user.isAdded) {
      alert(`The user is ${user.userInfo} you can log in now.`);
      history.push("/welcome");
    }
  }, [user]);

  const registerUser = e => {
    e.preventDefault();
    dispatch(SignUpUserAction({ email, password }));
  };
  return (
    <Wrapper>
      <AuthorizationPanel>
        <AuthCnt onSubmit={e => registerUser(e)}>
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
          <StyledInputSubmit type="submit" value="Sign Up"></StyledInputSubmit>
        </AuthCnt>
      </AuthorizationPanel>
    </Wrapper>
  );
}
