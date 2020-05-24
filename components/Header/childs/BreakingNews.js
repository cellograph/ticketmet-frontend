import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Ticker from "react-ticker";

// Ticker Styles
const MarqueeTag = styled.div`
  width: 100%;
  height: 12.5%;
  background: navy !important;
  border-bottom: 2px solid orange;
  color: #fff;
`;

const TickerTag = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    margin-right: 2rem;
    word-spacing: 5px;
  }
`;

function BreakingNews({ news }) {
  return (
    <MarqueeTag>
      <Ticker mode="smooth">
        {({ index }) => (
          <TickerTag>
            <p>
              <strong>This is a demo breaking news.</strong>
            </p>
          </TickerTag>
        )}
      </Ticker>
    </MarqueeTag>
  );
}

export default BreakingNews;
