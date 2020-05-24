import React, { useState } from "react";
import styled from "styled-components";
import CustomRadioButton from "../../styles/CustomRadioButton";
import OneWaySearch from "./OneWay/OneWaySearch";
import RoundSearch from "./Round/RoundSearch";
import MultiCitySearch from "./MultiCity/MultiCitySearch";

const AirSearchTag = styled.div`
  width: 100%;
  height: 100%;
`;

const AirSearchHeadTag = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
`;

const AirSearchBodyTag = styled.div`
  width: 100%;
  height: calc(100%-3rem);
`;

function AirSearch(props) {
  const [checked, setChecked] = useState("OW");

  return (
    <AirSearchTag>
      <AirSearchHeadTag>
        <CustomRadioButton>
          <span className="title">One Way</span>
          <input
            type="radio"
            name="radio"
            onChange={() => setChecked("OW")}
            checked={checked === "OW" ? true : false}
          />
          <span className="checkmark"></span>
        </CustomRadioButton>
        <CustomRadioButton>
          Round Trip
          <input
            type="radio"
            name="radio"
            onChange={() => setChecked("RT")}
            checked={checked === "RT" ? true : false}
          ></input>
          <span className="checkmark"></span>
        </CustomRadioButton>
        <CustomRadioButton>
          Multi City
          <input
            type="radio"
            name="radio"
            onChange={() => setChecked("MC")}
            checked={checked === "MC" ? true : false}
          ></input>
          <span className="checkmark"></span>
        </CustomRadioButton>
      </AirSearchHeadTag>
      <AirSearchBodyTag>
        {checked && checked === "OW" ? (
          <OneWaySearch />
        ) : checked === "RT" ? (
          <RoundSearch />
        ) : checked === "MC" ? (
          <MultiCitySearch />
        ) : (
          <p>Something Went Wrong!</p>
        )}
      </AirSearchBodyTag>
    </AirSearchTag>
  );
}

export default AirSearch;
