import React from "react";
import styled from "styled-components";
import {
  START_DATE,
  FormatFunction,
  getInputValue,
  OnDatesChangeProps,
  FirstDayOfWeek,
} from "@datepicker-react/hooks";
import { GoCalendar } from "react-icons/go";
import Input from "./Input";

const InputBoxTag = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
`;

const Icon = styled.div`
  flex-basis: 20%;
  font-size: 1.8rem;
  text-align: center;
`;

function InputBox({
  date,
  placeholder,
  id,
  vertical,
  isActive,
  ariaLabel,
  onClick,
  value,
  showCalendarIcon,
  padding,
  rtl,
  disableAccessibility,
  dateFormat,
  onChange = () => {},
}) {
  return (
    <InputBoxTag>
      <Icon>
        <GoCalendar />
      </Icon>
      <Input
        isActive={false}
        placeholder={placeholder}
        value={getInputValue(date, dateFormat, "")}
        onClick={onClick}
        showCalendarIcon={showCalendarIcon}
        vertical={vertical}
        rtl={rtl}
        onChange={onChange}
        dateFormat={dateFormat}
      />
    </InputBoxTag>
  );
}

export default InputBox;
