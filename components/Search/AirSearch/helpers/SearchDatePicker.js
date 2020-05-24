import React, { useReducer, useState, useRef } from "react";

import DateSingleInput from "../../../DatePicker/DateSingleInput/DateSingleInput";
import styled from "styled-components";

const initialDateState = {
  date: null,
  showDatepicker: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "focusChange":
      return { ...state, showDatepicker: action.payload };
    case "dateChange":
      return action.payload;
    default:
      throw new Error();
  }
}

const PickerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-basis: ${(props) => (props.flexBasis ? props.flexBasis : "25%")};
  min-height: 3rem;
  margin-right: 1%;

  .label {
    position: absolute;
    top: -1.5rem;
    left: 1rem;
    background: #fff;
    display: inline-block;
    padding: 0 1rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    z-index: 10;
  }
`;

function SearchDatePicker({ getDate, fieldName, flexBasis, fieldTopLabel }) {
  const [state, dispatch] = useReducer(reducer, initialDateState);
  const [mdate, setDate] = useState("");

  const handleDateChange = (data, name) => {
    dispatch({ type: "dateChange", payload: data });
    getDate(fieldName, data.date);
  };
  const pickRef = useRef(null);

  return (
    <PickerContainer flexBasis={flexBasis}>
      <span className="label">{fieldTopLabel}</span>
      <DateSingleInput
        onDateChange={(data) => handleDateChange(data)}
        onFocusChange={(focusedInput) =>
          dispatch({
            type: "focusChange",
            payload: focusedInput,
          })
        }
        date={state.date}
        showDatepicker={state.showDatepicker}
        showClose={false}
        displayFormat="EEE, d MMM yyyy"
        showResetDate={false}
        numberOfMonths={1}
        firstDayOfWeek={6}
        ref={pickRef}
      />
    </PickerContainer>
  );
}

export default SearchDatePicker;
