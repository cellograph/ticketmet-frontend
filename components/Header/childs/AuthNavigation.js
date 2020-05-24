import React, { useContext } from "react";
import Link from "next/link";
import { FaHeadset } from "react-icons/fa";
import styled from "styled-components";
import UserContext from "../../Context/UserContext";

const AuthButtonTag = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: ${(props) => (props.bg ? props.bg : "#142C4F")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: 1.2rem;
  font-weight: bold;
  -webkit-box-shadow: 1px 2px 16px -5px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 1px 2px 16px -5px rgba(0, 0, 0, 0.42);
  box-shadow: 1px 2px 16px -5px rgba(0, 0, 0, 0.42);
  padding: 8px 20px;
  border-radius: 6px;
`;

function AuthButton({ label, ...otherProps }) {
  return <AuthButtonTag {...otherProps}>{label.toUpperCase()}</AuthButtonTag>;
}

const HeadFourParagraph = styled.p`
  font-size: 1.4rem;
  line-height: 3;
  font-weight: bold;
  color: navy;
  margin-left: 2rem;

  span {
    margin: 0 5px;
  }
`;

const AuthNavTag = styled.nav`
  flex-basis: 15%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .authbtn {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  p {
    color: navy;
    font-weight: bold;
  }
`;

function AuthNavigation(props) {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <AuthNavTag>
      {user && user.isAuth ? (
        <p>Welcome, {user.user.name}</p>
      ) : (
        <div className="authbtn">
          <Link href="/auth/login">
            <AuthButton label="log in" />
          </Link>
          <Link href="/auth/join">
            <AuthButton label="register" />
          </Link>
        </div>
      )}
    </AuthNavTag>
  );
}

export default AuthNavigation;
