import React, { useState, useRef, useEffect } from "react";
import { FiMapPin } from "react-icons/fi";
import styled from "styled-components";

import airlines from "../../../../lib/airlines";
import { AirportPickerTag } from "../../../AirportPicker/AirportPicker";

function AirlinePicker({
  fieldLabel,
  placeholder,
  name,
  setVal,
  value,
  flexBasis,
}) {
  const [isFocused, setFocus] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const [inputValue, setInputValue] = useState(value);

  // ref
  const wrapRef = useRef(null);

  //   useEffects
  // Show/Hide Suggestions
  useEffect(() => {
    window.addEventListener("mousedown", hadnleOutClick);

    return () => {
      window.removeEventListener("mousedown", hadnleOutClick);
    };
  }, []);

  const hadnleOutClick = (e) => {
    const { current: wrap } = wrapRef;

    if (wrap && !wrap.contains(e.target)) {
      setFocus(false);
    }
  };

  // Filter Suggestions
  useEffect(
    (value) => {
      if (value) {
        const data = airlines.filter((i) => i.code === value);
      }
    },
    [value]
  );

  // HandleChange
  const handleChange = (e) => {
    const { value } = e.target;
    setVal(name, value);

    const filteredSuggestion = airlines.filter((i) => {
      if (value.length === 3) {
        return i.code.toLowerCase().includes(value.toLowerCase());
      } else {
        return (
          new RegExp(value, "i").test(i.code) ||
          new RegExp(value, "i").test(i.name)
        );
      }
    });

    setSuggestion(filteredSuggestion.slice(0, 10));
  };

  const selectSuggestion = (val) => {
    const result = {
      code: val.code,
      image: val.image,
      name: val.name,
    };
    setVal(name, result);
    setSuggestion([]);
    setFocus(false);
  };

  return (
    <AirportPickerTag flexBasis={flexBasis}>
      <span className="label">{fieldLabel}</span>
      <div className="icon">
        <FiMapPin />
      </div>
      <div className="picker" ref={wrapRef}>
        <input
          autoComplete="off"
          name={name}
          onClick={() => setFocus(!isFocused)}
          placeholder={placeholder}
          onChange={handleChange}
          value={value && value.name ? `${value.code}-${value.name}` : value}
        />
        <div className="indicator"></div>
        {isFocused && (
          <div className="drop-menu">
            {suggestion.length > 0 ? (
              suggestion.map((i) => (
                <div
                  tabIndex="0"
                  key={i.code}
                  onClick={() => selectSuggestion(i)}
                >
                  {i.code}-{i.name}
                </div>
              ))
            ) : (
              <div>No Results</div>
            )}
          </div>
        )}
      </div>
    </AirportPickerTag>
  );
}

export default AirlinePicker;
