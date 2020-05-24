import React, { useState, useEffect, useMemo } from "react";
import jwtDecode from "jwt-decode";
import UserContext from "./UserContext";

function UserProvider(props) {
  const [user, setUser] = useState({
    isAuth: false,
    user: null,
  });
  const userProviderValue = {
    user,
    setUser,
  };

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (token) {
      const data = jwtDecode(token);
      setUser({
        isAuth: true,
        user: data,
      });
    } else {
      setUser({
        isAuth: false,
        user: null,
      });
    }
  }, [user.isAuth]);

  return (
    <UserContext.Provider value={userProviderValue}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
