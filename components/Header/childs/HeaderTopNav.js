import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderTopNavTag = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    font-size: 1.2rem;
    line-height: 3;
    font-weight: bold;
    color: navy;
  }
`;

function HeaderTopNav(props) {
  return (
    <HeaderTopNavTag>
      <Link href="#">
        <a>Booking Status</a>
      </Link>
      <span>||</span>
      <Link href="#">
        <a>Ticket Print</a>
      </Link>
      <span>||</span>
      <Link href="#">
        <a>Change / Cancel</a>
      </Link>
    </HeaderTopNavTag>
  );
}

export default HeaderTopNav;
