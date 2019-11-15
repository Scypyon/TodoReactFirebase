import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const AuthorizationPanel = styled.div`
  min-width: 25em;
  min-height: 12em;
  border: 2px solid #333;
  box-shadow: 5px 5px #333;
  padding: 2em 5em;

  h1 {
    font-size: 1.5em;
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
    width: 60%;
    margin: 1.5em auto 0em auto;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ed3330;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
    text-align: center;
    font-family:bold;
:hover {
    background: #434343;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
    cursor: pointer;
`;

export const AuthCnt = styled.form`
  display: grid;
  align-items: center;
  justify-content: center;
`;
export const InputFields = styled.input`
  width: 25em;
  margin: 2em auto;
  height: 2em;
  border: 1.5px solid #555;
  border-radius: 5px;
`;

export const StyledInputSubmit = styled.input`
  background: #ed3330;
  border: none;
  font-size: 2em;
  color: #fff;
  border-radius: 1em;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
  }
`;
