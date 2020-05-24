import React, { useRef, useImperativeHandle } from "react";

import {
  useDatepicker,
  MonthType,
  UseDatepickerProps,
  getInputValue,
  START_DATE,
  END_DATE,
  FormatFunction,
  dayLabelFormat as dayLabelFormatFn,
  weekdayLabelFormat as weekdayLabelFormatFn,
  monthLabelFormat as monthLabelFormatFn,
} from "@datepicker-react/hooks";
import DatePickerContext from "../Context/DatePickerContext";
import {
  DatePickerContainer,
  MonthListContainer,
  NavContainer,
} from "./DatePicker.styles";
import Month from "../Month/Month";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function DatePicker({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  focusedInput,
  onDatesChange,
  dayLabelFormat,
  weekdayLabelFormat,
  monthLabelFormat,
  onDayRender,
  initialVisibleMonth,
  vertical = false,
  rtl = false,
  showResetDates = true,
  showClose = true,
  showSelectedDates = true,
  exactMinBookingDays = false,
  isDateBlocked = () => false,
  minBookingDays = 1,
  onClose = () => {},
  numberOfMonths: numberOfMonthsProp,
  firstDayOfWeek: firstDayOfWeekProp,
  displayFormat = "MM/dd/yyyy",
  phrases,
  unavailableDates = [],
  ref,
}) {
  const {
    activeMonths,
    isDateSelected,
    isFirstOrLastSelectedDate,
    isDateHovered,
    firstDayOfWeek,
    onDateSelect,
    onResetDates,
    goToPreviousMonths,
    goToNextMonths,
    numberOfMonths,
    hoveredDate,
    onDateHover,
    isDateFocused,
    focusedDate,
    onDateFocus,
    isDateBlocked: isDateBlockedFn,
  } = useDatepicker({
    startDate,
    endDate,
    focusedInput,
    onDatesChange,
    minBookingDate,
    maxBookingDate,
    minBookingDays,
    isDateBlocked,
    exactMinBookingDays,
    unavailableDates,
    initialVisibleMonth,
    numberOfMonths: numberOfMonthsProp,
    firstDayOfWeek: firstDayOfWeekProp,
  });

  const monthGridRef = useRef(null);

  useImperativeHandle(ref, () => ({
    onDateSelect: (date) => {
      onDateSelect(date);
    },
  }));

  function scrollTopToMonthGrid() {
    if (monthGridRef && monthGridRef.current && vertical) {
      monthGridRef.current.scrollTop = 0;
    }
  }

  function handleGoToNextMonth() {
    goToNextMonths();
    scrollTopToMonthGrid();
  }

  function handleGoToPreviousMonth() {
    goToPreviousMonths();
    scrollTopToMonthGrid();
  }

  return (
    <DatePickerContext.Provider
      value={{
        rtl,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isFirstOrLastSelectedDate,
        onDateFocus,
        focusedDate,
        onDateSelect,
        onDateHover,
        onDayRender,
        isDateBlocked: isDateBlockedFn,
      }}
    >
      <DatePickerContainer>
        <NavContainer>
          <button type="button" onClick={goToPreviousMonths}>
            <FaArrowAltCircleLeft />
          </button>
          <button type="button" onClick={goToNextMonths}>
            <FaArrowAltCircleRight />
          </button>
        </NavContainer>
        <MonthListContainer
          ref={monthGridRef}
          onMouseLeave={() => {
            if (hoveredDate) {
              onDateHover(null);
            }
          }}
        >
          {activeMonths.map((month) => (
            <Month
              key={`month-${month.year}-${month.month}`}
              year={month.year}
              month={month.month}
              firstDayOfWeek={firstDayOfWeek}
              dayLabelFormat={dayLabelFormat || dayLabelFormatFn}
              weekdayLabelFormat={weekdayLabelFormat || weekdayLabelFormatFn}
              monthLabelFormat={monthLabelFormat || monthLabelFormatFn}
            />
          ))}
        </MonthListContainer>
      </DatePickerContainer>
    </DatePickerContext.Provider>
  );
}

export default React.forwardRef(DatePicker);
