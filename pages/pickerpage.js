import React, { useReducer, useRef, useState } from "react";

import DateSingleInput from "../components/DatePicker/DateSingleInput/DateSingleInput";

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

function pickerpage(props) {
  const [state, dispatch] = useReducer(reducer, initialDateState);
  const [mdate, setDate] = useState("");
  const handleDateChange = (data, name) => {
    dispatch({ type: "dateChange", payload: data });
  };

  const pickRef = useRef(null);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "stretch",
        width: "40rem",
        minHeight: "4rem",
        border: "1px solid red",
        margin: "2rem auto",
      }}
    >
      <DateSingleInput
        onDateChange={(data) => handleDateChange(data)}
        onFocusChange={(focusedInput) =>
          dispatch({ type: "focusChange", payload: focusedInput })
        }
        date={state.date} // Date or null
        showDatepicker={state.showDatepicker} // Boolean
        showClose={true}
        displayFormat="EEE, d MMM yyyy"
        showResetDate={false}
        numberOfMonths={1}
        firstDayOfWeek={6}
        ref={pickRef}
      />
    </div>
  );
}

export default pickerpage;
