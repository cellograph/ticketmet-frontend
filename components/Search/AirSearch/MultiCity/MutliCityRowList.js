import React from "react";
import {
  SearchFormTag,
  SearchFormGridTag,
  SearchFormBoxTag,
  SearchFormSearchTag,
  SearchFormRowTag,
  SearchBtn,
  NormalBtn,
} from "../../../styles/search.styles";
import { BsFillPersonFill } from "react-icons/bs";
import { PassengerTag } from "../../../styles/search.styles";
import AirportPicker from "../../../AirportPicker/AirportPicker";
import SearchDatePicker from "../helpers/SearchDatePicker";
import Passenger from "../helpers/Passenger";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AirlinePicker from "../helpers/AirlinePicker";
import { oneWaySearchValidation } from "../../../../lib/validation/searchValidation";
import UserContext from "../../../Context/UserContext";
import Router from "next/router";

function MutliCityRowList({ rows, getAirportValue, values, getDateValue }) {
  const Row = (i) => {
    switch (i) {
      case 0:
        return (
          <SearchFormRowTag>
            <AirportPicker
              name="route1"
              fieldLabel="From"
              placeholder="Origin"
              setVal={getAirportValue}
              value={values["route1"]}
            />
            <AirportPicker
              name="route2"
              fieldLabel="To"
              placeholder="Destination"
              setVal={getAirportValue}
              value={values["route2"]}
            />
            <SearchDatePicker
              getDate={getDateValue}
              fieldName="date1"
              flexBasis="30%"
              fieldTopLabel="Departure Date"
            />
          </SearchFormRowTag>
        );
      case 1:
        return (
          <SearchFormRowTag>
            <AirportPicker
              name="route2"
              fieldLabel="From"
              placeholder="Origin"
              setVal={getAirportValue}
              value={values["route2"]}
            />
            <AirportPicker
              name="route3"
              fieldLabel="To"
              placeholder="Destination"
              setVal={getAirportValue}
              value={values["route3"]}
            />
            <SearchDatePicker
              getDate={getDateValue}
              fieldName="date2"
              flexBasis="30%"
              fieldTopLabel="Departure Date"
            />
          </SearchFormRowTag>
        );
      case 2:
        return (
          <SearchFormRowTag>
            <AirportPicker
              name="route3"
              fieldLabel="From"
              placeholder="Origin"
              setVal={getAirportValue}
              value={values["route3"]}
            />
            <AirportPicker
              name="route4"
              fieldLabel="To"
              placeholder="Destination"
              setVal={getAirportValue}
              value={values["route4"]}
            />
            <SearchDatePicker
              getDate={getDateValue}
              fieldName="date3"
              flexBasis="30%"
              fieldTopLabel="Departure Date"
            />
          </SearchFormRowTag>
        );
      case 3:
        return (
          <SearchFormRowTag>
            <AirportPicker
              name="route4"
              fieldLabel="From"
              placeholder="Origin"
              setVal={getAirportValue}
              value={values["route4"]}
            />
            <AirportPicker
              name="route5"
              fieldLabel="To"
              placeholder="Destination"
              setVal={getAirportValue}
              value={values["route5"]}
            />
            <SearchDatePicker
              getDate={getDateValue}
              fieldName="date4"
              flexBasis="30%"
              fieldTopLabel="Departure Date"
            />
          </SearchFormRowTag>
        );
    }
  };

  return rows && rows.map((i, idx) => Row(i));
}

export default MutliCityRowList;
