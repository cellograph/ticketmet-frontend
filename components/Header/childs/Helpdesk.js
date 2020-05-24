import React from "react";
import { FaHeadset, FaMailBulk } from "react-icons/fa";
import styled from "styled-components";
import { H4P } from "../../styles/typography.styles";

const HelpDeskTag = styled.div`
  flex-basis: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Helpdesk({ helpMobile, helpMail }) {
  return (
    <HelpDeskTag>
      <H4P>
        <span>
          <FaHeadset />
        </span>
        Call Us: {helpMobile}
      </H4P>
      <H4P>
        <span>
          <FaMailBulk />
        </span>
        {helpMail}
      </H4P>
    </HelpDeskTag>
  );
}

export default Helpdesk;
