import React, { useState, useMemo, useEffect } from "react";
import Meta from "./Meta";
import styled from "styled-components";
import MyNprogress from "./MyNprogress";
import UserContext from "../Context/UserContext";
import jwtDecode from "jwt-decode";
import getCurrentUser from "../../utils/setCurrentUser";
import UserProvider from "../Context/UserProvider";

const PageTag = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Lato:400,700&display=swap");
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Page = (props) => {
  return (
    <UserProvider>
      <PageTag>
        <Meta />
        <MyNprogress />
        {props.children}
      </PageTag>
    </UserProvider>
  );
};

export default Page;
