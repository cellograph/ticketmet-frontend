import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import AuthCard, { AuthCardTag } from "../../components/Auth/AuthCard";
import UserContext from "../../components/Context/UserContext";
import Router from "next/router";
import Login from "../../components/Auth/Login";

const AuthPage = (props) => {
  const router = useRouter();
  const { action } = router.query;
  const { user, setUser } = useContext(UserContext);
  const [auth, setAuth] = useState(user.isAuth);

  useEffect(() => {
    if (user.isAuth) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [user.isAuth]);

  if (auth) {
    return Router.push("/");
  }

  return <AuthCard action={action} />;
};

export default AuthPage;
