import React, { useRef, useEffect } from "react";
import {
  START_DATE,
  FormatFunction,
  getInputValue,
  OnDatesChangeProps,
  FirstDayOfWeek,
} from "@datepicker-react/hooks";
import { PickerContainer } from "./DateSingleInput.styles";
import InputBox from "../Input/InputBox";
import DatePicker from "../DatePicker/DatePicker";

function getPlacement(placement, rtl) {
  if (placement === "top" && !rtl) {
    return {
      dateSingleDatepickerWrapperTop: "unset",
      dateSingleDatepickerWrapperRight: "unset",
      dateSingleDatepickerWrapperBottom: "65px",
      dateSingleDatepickerWrapperLeft: "0",
    };
  } else if (placement === "top" && rtl) {
    return {
      dateSingleDatepickerWrapperTop: "unset",
      dateSingleDatepickerWrapperRight: "0",
      dateSingleDatepickerWrapperBottom: "65px",
      dateSingleDatepickerWrapperLeft: "unset",
    };
  } else if (placement === "bottom" && rtl) {
    return {
      dateSingleDatepickerWrapperTop: "unset",
      dateSingleDatepickerWrapperRight: "0",
      dateSingleDatepickerWrapperBottom: "unset",
      dateSingleDatepickerWrapperLeft: "unset",
    };
  }

  return {
    dateSingleDatepickerWrapperTop: "unset",
    dateSingleDatepickerWrapperRight: "unset",
    dateSingleDatepickerWrapperBottom: "unset",
    dateSingleDatepickerWrapperLeft: "0",
  };
}

function DateSingleInput({
  date,
  firstDayOfWeek = 6,
  onFocusChange,
  showDatepicker,
  onDateChange,
  dayLabelFormat,
  weekdayLabelFormat,
  monthLabelFormat,
  onDayRender,
  initialVisibleMonth,
  numberOfMonths = 1,
  showClose = true,
  showResetDate = true,
  vertical = false,
  rtl = false,
  isDateBlocked = () => false,
  onClose = () => {},
  showCalendarIcon = true,
  displayFormat = "MM/dd/yyyy",
  phrases,
  placement = "bottom",
  inputId = "startDate",
  unavailableDates = [],
}) {
  const ref = useRef(null);
  const datepickerWrapperRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("click", onClickOutsideHandler);
    }

    return () => {
      window.removeEventListener("click", onClickOutsideHandler);
    };
  });

  function onClickOutsideHandler(event) {
    if (
      showDatepicker &&
      datepickerWrapperRef &&
      datepickerWrapperRef.current &&
      // @ts-ignore
      !datepickerWrapperRef.current.contains(event.target)
    ) {
      onFocusChange(false);
    }
  }

  function handleDatepickerClose() {
    onClose();
    onFocusChange(false);
  }

  function onDatesChange({ focusedInput, startDate }) {
    onDateChange({
      showDatepicker: focusedInput === null,
      date: startDate,
    });
  }

  function handleInputChange(date) {
    if (ref && ref.current && ref.current.onDateSelect) {
      ref.current.onDateSelect(date);
    }
  }

  return (
    <PickerContainer ref={datepickerWrapperRef}>
      <InputBox
        date={date}
        isActive={false}
        placeholder="Select Date"
        value={getInputValue(date, displayFormat, "")}
        onClick={() => onFocusChange(true)}
        showCalendarIcon={showCalendarIcon}
        vertical={vertical}
        rtl={rtl}
        onChange={handleInputChange}
        dateFormat={displayFormat}
      />
      {showDatepicker && (
        <DatePicker
          minBookingDays={1}
          onClose={handleDatepickerClose}
          startDate={date}
          endDate={date}
          firstDayOfWeek={firstDayOfWeek}
          numberOfMonths={numberOfMonths}
          focusedInput={showDatepicker ? START_DATE : null}
          displayFormat={displayFormat}
          onDatesChange={onDatesChange}
          isDateBlocked={isDateBlocked}
          showResetDates={showResetDate}
          vertical={vertical}
          showSelectedDates={false}
          showClose={showClose}
          rtl={rtl}
          dayLabelFormat={dayLabelFormat}
          weekdayLabelFormat={weekdayLabelFormat}
          monthLabelFormat={monthLabelFormat}
          onDayRender={onDayRender}
          phrases={phrases}
          ref={ref}
          unavailableDates={unavailableDates}
          initialVisibleMonth={initialVisibleMonth}
        />
      )}
    </PickerContainer>
  );
}

export default DateSingleInput;
