import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { parseDate, getInputValue } from "@datepicker-react/hooks";

const InputTag = styled.input`
  flex-basis: 80%;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.6rem;
  font-weight: bold;
  border: none;
  outline: none;
  padding: 0 1rem;
  background: transparent;
`;

function Input({
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
  const [searchString, setSearchString] = useState(value);
  const ref = useRef(null);

  useEffect(() => {
    setSearchString(value);
  }, [value]);

  function handleOnChange(e) {
    const dateValue = e.target.value;
    setSearchString(dateValue);

    if (typeof ref.current === "number") {
      clearTimeout(ref.current);
    }

    ref.current = setTimeout(() => {
      onClick();
      const parsedDate = parseDate(dateValue, dateFormat, new Date());

      if (!isNaN(parsedDate)) {
        onChange(parsedDate);
      }
    }, 1000);
  }

  return (
    <InputTag
      tabIndex={disableAccessibility ? -1 : 0}
      id={id}
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={searchString}
      autoComplete="off"
      onChange={handleOnChange}
      onFocus={onClick}
      data-testid="DatepickerInput"
    />
  );
}

export default Input;
