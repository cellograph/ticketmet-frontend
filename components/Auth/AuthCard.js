import React, { useContext } from "react";
import styled from "styled-components";
import Login from "./Login";
import Registration from "./Registration";
import UserContext from "../Context/UserContext";
import Router from "next/router";

export const AuthCardTag = styled.div`
  width: 30%;
  min-height: 20rem;
  padding: 2rem;
  margin: 10rem auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 8px 8.28px 0.72px rgba(0, 0, 0, 0.04);
`;

function AuthCard({ action }) {
  let form =
    action && action === "login" ? (
      <Login />
    ) : action && action === "join" ? (
      <Registration />
    ) : (
      <Login />
    );
  return <AuthCardTag>{form}</AuthCardTag>;
}

export default AuthCard;
