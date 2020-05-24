import React from "react";
import styled from "styled-components";

const HomePageBodySectionTag = styled.section`
  width: 100%;
  min-height: 10rem;
  padding: 2rem;
  background: ${(props) => (props.bg ? props.bg : "transparent")};
`;

function HomePageBodySection({ bg, children }) {
  return <HomePageBodySectionTag bg={bg}>{children}</HomePageBodySectionTag>;
}

export default HomePageBodySection;
