import React, { useState, useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import UserContext from "../../Context/UserContext";
import Router from "next/router";

const NavbarTag = styled.nav`
  width: 100%;
  height: 15%;
  background: ${(props) => (props.background ? props.background : "navy")};
  padding: 0 10%;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  color: #fff;
  position: relative;
`;

const NavItemTag = styled.a`
  padding: 0 10px;
  margin-right: 1rem;
  color: ${(props) => (props.color ? props.color : "#fff")};
  background: ${(props) => (props.background ? props.background : "none")};
  border: none;
  outline: none;
  font-size: 1.4rem;
  font-weight: bold;
  transition: all 0.1s ease-in;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid #fff;
    color: ${(props) => (props.color ? props.color : "#fff")};
  }
`;

const NavDropTag = styled.div`
  padding: 0 10px;
  margin-right: 1rem;
  color: ${(props) => (props.color ? props.color : "#fff")};
  background: ${(props) => (props.background ? props.background : "none")};
  border: none;
  outline: none;
  font-size: 1.4rem;
  font-weight: bold;
  transition: all 0.1s ease-in;
  cursor: pointer;
  position: relative;

  .drop-menu {
    background: #fff;
    border: 1px solid #ddd;
    position: absolute;
    top: 3rem;
    left: 0;
    width: 10rem;
    min-height: 3rem;
    display: ${(props) => (props.showDrop ? "flex" : "none")};
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
`;

function Navbar(props) {
  const [showDrop, setShowDrop] = useState(true);
  const { user, setUser } = useContext(UserContext);
  const handleLogout = (e) => {
    localStorage.clear();
    setUser({
      isAuth: false,
      user: null,
    });
    Router.push("/");
  };
  return (
    <NavbarTag>
      <Link href="/">
        <NavItemTag>Home</NavItemTag>
      </Link>
      <Link href="/">
        <NavItemTag>Visa Services</NavItemTag>
      </Link>
      <Link href="/">
        <NavItemTag>Services</NavItemTag>
      </Link>
      <Link href="/">
        <NavItemTag>Offers</NavItemTag>
      </Link>
      {user && user.isAuth && (
        <NavItemTag onClick={handleLogout}>Logout</NavItemTag>
      )}
    </NavbarTag>
  );
}

export default Navbar;

/**
 * <NavbarTag>
      
      <NavDropTag showDrop={showDrop}>
        <span onClick={() => setShowDrop(!showDrop)}>Imran</span>
        <div className="drop-menu">
          <p>Hi</p>
        </div>
      </NavDropTag>
    </NavbarTag>
 */
