import React from "react";
import styled from "styled-components";

import BreakingNews from "./childs/BreakingNews";
import HeadNavigation from "./childs/HeadNavigation";

const LayoutHeaderTag = styled.header`
  grid-area: header;
  background: #fff;
  border-bottom: 2px solid orange;
`;

const HeaderSection = (props) => {
  return (
    <LayoutHeaderTag>
      <BreakingNews />
      <HeadNavigation />
    </LayoutHeaderTag>
  );
};

export default HeaderSection;
