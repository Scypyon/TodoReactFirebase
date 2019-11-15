import React from "react";

import {
  Wrapper,
  AuthorizationPanel,
  ButtonWrapper,
  StyledLink
} from "shared/AuthPanelStyles";

function App() {
  return (
    <Wrapper>
      <AuthorizationPanel>
        <h1>Hi ! Welcome in Todo App. Please log in or sign up</h1>
        <ButtonWrapper>
          <StyledLink to="login">Log In</StyledLink>
          <StyledLink to="/signup">Sign Up</StyledLink>
        </ButtonWrapper>
      </AuthorizationPanel>
    </Wrapper>
  );
}

export default App;
