import React, { useState, useReducer, useContext, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useFormik } from "formik";
import {
  SearchFormTag,
  SearchFormGridTag,
  SearchFormBoxTag,
  SearchFormSearchTag,
  SearchFormRowTag,
  MutiCityAddRowTag,
  SearchBtn,
  NormalBtn,
} from "../../../styles/search.styles";
import { PassengerTag } from "../../../styles/search.styles";
import { FaPlus, FaMinus } from "react-icons/fa";
import AirportPicker from "../../../AirportPicker/AirportPicker";
import SearchDatePicker from "../helpers/SearchDatePicker";
import Passenger from "../helpers/Passenger";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AirlinePicker from "../helpers/AirlinePicker";
import UserContext from "../../../Context/UserContext";
import Router from "next/router";
import MutliCityRowList from "./MutliCityRowList";

const initialFormikValues = {
  route1: "",
  route2: "",
  route3: "",
  route4: "",
  route5: "",
  date1: null,
  date2: null,
  date3: null,
  date4: null,
  class: "",
  preferAirline: null,
  totalRow: 2,
};

// Passenger Reducer
const initialPassengerState = {
  adult: 0,
  youth: 0,
  child: 0,
};

function passengerReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, [action.payload]: state[action.payload] + 1 };
    case "decrement":
      return { ...state, [action.payload]: state[action.payload] - 1 };
    default:
      throw new Error();
  }
}

function MultiCitySearch(props) {
  // states
  const [showPassenger, setShowPassenger] = useState(false);
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [rows, setRows] = useState([0, 1]);

  // Reducers
  const [passengerState, passengerDispatch] = useReducer(
    passengerReducer,
    initialPassengerState
  );

  //   formik
  const {
    values,
    setFieldValue,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    setFieldTouched,
  } = useFormik({
    initialValues: initialFormikValues,
    onSubmit: (data, actions) => {},
  });

  const getAirportValue = (name, value) => {
    setFieldValue(name, value);
  };

  const getDateValue = (name, value) => {
    setFieldValue(name, value);
    setFieldTouched(name, true);
  };

  const setCount = (type, name) => {
    passengerDispatch({ type, payload: name });
  };

  const addRow = () => setRows([...rows, rows.length]);
  const delRow = () => {
    if (rows.length > 2) {
      setRows(rows.slice(0, -1));
    }
  };

  return (
    <SearchFormTag noValidate method="POST" onSubmit={handleSubmit}>
      <SearchFormGridTag>
        <SearchFormBoxTag>
          <MutliCityRowList
            rows={rows}
            getDateValue={getDateValue}
            getAirportValue={getAirportValue}
            values={values}
          />
          <SearchFormRowTag>
            <MutiCityAddRowTag>
              {rows.length > 1 && rows.length < 4 && (
                <button type="button" onClick={addRow}>
                  <span>
                    <FaPlus />
                  </span>
                  Add Flight
                </button>
              )}
              {rows.length > 2 && (
                <button type="button" onClick={delRow}>
                  <span>
                    <FaMinus />
                  </span>
                  Delete Flight
                </button>
              )}
            </MutiCityAddRowTag>
          </SearchFormRowTag>
        </SearchFormBoxTag>
        <SearchFormSearchTag>
          <SearchFormRowTag>
            <PassengerTag>
              <span className="label">PASSANGER</span>
              <div
                className="innerDiv"
                onClick={() => setShowPassenger(!showPassenger)}
              >
                <span>
                  <BsFillPersonFill />
                </span>
                <div>
                  {`${
                    passengerState.child +
                    passengerState.adult +
                    passengerState.youth
                  } Traveller`}
                </div>
              </div>
              {showPassenger && (
                <div className="popupDiv">
                  <Passenger
                    title="Adult"
                    value={passengerState.adult}
                    handleCount={setCount}
                    name="adult"
                  />

                  <Passenger
                    title="Youth"
                    value={passengerState.youth}
                    handleCount={setCount}
                    name="youth"
                  />

                  <Passenger
                    title="Child"
                    value={passengerState.child}
                    handleCount={setCount}
                    name="child"
                  />
                </div>
              )}
            </PassengerTag>
            <NormalBtn
              onClick={() => setAdvanceSearch(!advanceSearch)}
              type="button"
              title="Advanced Search"
            >
              <AiOutlinePlusCircle />
            </NormalBtn>
            <SearchBtn type="submit" disabled={isSubmitting}>
              Search
            </SearchBtn>
          </SearchFormRowTag>
          {advanceSearch && (
            <SearchFormRowTag>
              <AirlinePicker
                name="preferAirline"
                fieldLabel="Prefered Airline"
                placeholder="Select Prefered Airline"
                flexBasis="70%"
                setVal={getAirportValue}
                value={values.preferAirline}
              />
            </SearchFormRowTag>
          )}
        </SearchFormSearchTag>
      </SearchFormGridTag>
    </SearchFormTag>
  );
}

export default MultiCitySearch;
