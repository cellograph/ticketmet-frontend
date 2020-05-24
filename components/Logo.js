import React from "react";
import styled from "styled-components";
import Link from "next/link";

const LogoTag = styled.div`
  flex-basis: 10%;
  height: 100%;
  cursor: pointer;
  padding: 4px 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

function Logo({ src, alt }) {
  return (
    <Link href="/">
      <LogoTag>{src ? <img src={src} alt={alt} /> : "Ticketmet"}</LogoTag>
    </Link>
  );
}

export default Logo;
