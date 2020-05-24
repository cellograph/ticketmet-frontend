import React, { useContext, useState, useEffect } from "react";
import UserContext from "../Context/UserContext";
import Router from "next/router";
import AuthCard from "../Auth/AuthCard";

function UserWrapper(props) {
  const { user, setUser } = useContext(UserContext);
  const [auth, setAuth] = useState(user.isAuth);

  useEffect(() => {
    if (user.isAuth) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [user.isAuth]);

  if (!user.isAuth) {
    return <AuthCard action="login" />;
  }

  return props.children;
}

export default UserWrapper;
