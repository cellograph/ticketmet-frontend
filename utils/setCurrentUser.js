import jwtDecode from "jwt-decode";
import { useContext } from "react";
import UserContext from "../components/Context/UserContext";

const setCurrentUser = (token) => {
  const userdata = jwtDecode(token);
  return userdata;
};

const getCurrentUser = () => {
  let token = localStorage.getItem("auth_token");
  let user = setCurrentUser(token);
  return user;
};

export default getCurrentUser;
