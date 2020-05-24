import React, { useState } from "react";
import styled from "styled-components";

import { IoIosPaperPlane } from "react-icons/io";
import AirSearch from "./AirSearch/AirSearch";

const MainSearchTag = styled.div`
  margin: 3rem auto;
  min-height: 20rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .content {
    width: 80%;
    min-height: 20rem;
    margin: 0 auto;
  }
`;

const SearchBoxTag = styled.div`
  width: 100%;
  height: 100%;

  .head {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    background: transparent;

    button {
      background: #fff;
      border: none;
      outline: none;
      padding: 0 14px;
      cursor: pointer;

      span {
        margin-left: 5px;
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }

  .body {
    width: 100%;
    height: calc(100%-5rem);
    padding: 1rem;
    background: #fff;
  }
`;

function MainSearch(props) {
  const [form, setForm] = useState("flight");
  return (
    <MainSearchTag>
      <div className="content">
        <SearchBoxTag>
          <div className="head">
            <button type="button" onClick={() => setForm("flight")}>
              <IoIosPaperPlane /> <span>Flights</span>
            </button>
          </div>
          <div className="body">
            {form && form === "flight" ? <AirSearch /> : null}
          </div>
        </SearchBoxTag>
      </div>
    </MainSearchTag>
  );
}

export default MainSearch;
