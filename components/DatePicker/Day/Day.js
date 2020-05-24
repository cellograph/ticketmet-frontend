import React, { useMemo, useContext, useRef } from "react";
import styled, { css, ThemeContext } from "styled-components";
import { useDay } from "@datepicker-react/hooks";

import DatePickerContext from "../Context/DatePickerContext";

function getColor(
  isSelected,
  isSelectedStartOrEnd,
  isWithinHoverRange,
  { selectedFirstOrLast, normal, selected, rangeHover }
) {
  if (isSelectedStartOrEnd) {
    return selectedFirstOrLast;
  } else if (isSelected) {
    return selected;
  } else if (isWithinHoverRange) {
    return rangeHover;
  } else {
    return normal;
  }
}

const DayButton = styled.button`
  padding: 1rem;
  border: 0;
  color: #000;
  background: #fff;
  font-size: 1.6rem;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: all ease-in 0.1s;

  &:hover {
    background: whitesmoke;
  }
`;

function Day({ day, date }) {
  const dayRef = useRef(null);

  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
    onDayRender,
  } = useContext(DatePickerContext);

  const dayProps = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });

  return (
    <DayButton {...dayProps} type="button" ref={dayRef}>
      {typeof onDayRender === "function" ? onDayRender(date) : day}
    </DayButton>
  );
}

export default Day;
