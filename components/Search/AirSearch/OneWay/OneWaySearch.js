import React, { useState, useReducer, useContext, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useFormik } from "formik";
import {
  SearchFormTag,
  SearchFormGridTag,
  SearchFormBoxTag,
  SearchFormSearchTag,
  SearchFormRowTag,
  SearchBtn,
  NormalBtn,
} from "../../../styles/search.styles";
import { PassengerTag } from "../../../styles/search.styles";
import AirportPicker from "../../../AirportPicker/AirportPicker";
import SearchDatePicker from "../helpers/SearchDatePicker";
import Passenger from "../helpers/Passenger";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AirlinePicker from "../helpers/AirlinePicker";
import { oneWaySearchValidation } from "../../../../lib/validation/searchValidation";
import UserContext from "../../../Context/UserContext";
import Router from "next/router";

const initialFormikValues = {
  origin: "",
  destination: "",
  departureDate: null,
  class: "",
  preferAirline: null,
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

function OneWaySearch(props) {
  // states
  const [showPassenger, setShowPassenger] = useState(false);
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [showError, setShowError] = useState(false);

  // Reducers
  const [passengerState, passengerDispatch] = useReducer(
    passengerReducer,
    initialPassengerState
  );
  // userContext
  const { user, setUser } = useContext(UserContext);

  // formik
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
    onSubmit: (data, actions) => {
      if (!user.isAuth) {
        Router.push("/auth/login");
      }

      actions.setSubmitting(true);
      console.log(errors);
      console.log(data);
      actions.resetForm();
      actions.setSubmitting(false);
    },
    validationSchema: oneWaySearchValidation,
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (errors) {
      setShowError(true);
    }
    handleSubmit();
  };

  return (
    <SearchFormTag noValidate method="POST" onSubmit={handleFormSubmit}>
      <SearchFormGridTag>
        <SearchFormBoxTag>
          <SearchFormRowTag>
            <AirportPicker
              name="origin"
              fieldLabel="From"
              placeholder="Origin"
              setVal={getAirportValue}
              value={values.origin}
            />
            <AirportPicker
              name="destination"
              fieldLabel="To"
              placeholder="Destination"
              setVal={getAirportValue}
              value={values.destination}
            />
            {/* DatePicker */}
            <SearchDatePicker
              getDate={getDateValue}
              fieldName="departureDate"
              flexBasis="30%"
              fieldTopLabel="Departure Date"
            />
          </SearchFormRowTag>
          {advanceSearch && (
            <SearchFormRowTag>
              <AirlinePicker
                name="preferAirline"
                fieldLabel="Prefered Airline"
                placeholder="Select Prefered Airline"
                flexBasis="30%"
                setVal={getAirportValue}
                value={values.preferAirline}
              />
            </SearchFormRowTag>
          )}
        </SearchFormBoxTag>
        <SearchFormSearchTag>
          {console.log(errors && touched ? errors : null)}

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
        </SearchFormSearchTag>
      </SearchFormGridTag>
    </SearchFormTag>
  );
}

export default OneWaySearch;
