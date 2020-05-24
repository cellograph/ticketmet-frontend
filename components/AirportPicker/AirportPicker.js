import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FiMapPin } from "react-icons/fi";

import airports from "../../lib/airports";

export const AirportPickerTag = styled.div`
  flex-basis: ${(props) => (props.flexBasis ? props.flexBasis : "30%")};
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  border: 1px solid #ddd;
  background: #fff;
  margin-right: 2%;

  .label {
    position: absolute;
    top: -1.5rem;
    left: 1rem;
    background: #fff;
    display: inline-block;
    padding: 0 1rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    z-index: 10;
  }

  .icon {
    flex-basis: 14%;
    height: 100%;
    text-align: center;
    font-size: 1.8rem;
    line-height: 5rem;
  }

  .picker {
    flex-basis: 82%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;

    input {
      flex-basis: 90%;
      height: 100%;
      line-height: 4rem;
      padding: 0 1rem;
      font-size: 1.4rem;
      border: none;
      outline: none;
    }

    .indicator {
      flex-basis: 10%;
      height: 100%;
      line-height: 4rem;
    }

    .drop-menu {
      position: absolute;
      top: 5rem;
      left: -5rem;
      background: #fff;
      width: 35rem;
      min-height: 5rem;
      max-height: 30rem;
      overflow: auto;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-direction: column;
      z-index: 1000;

      div {
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        font-size: 1.6rem;
        border-bottom: 1px dotted #ddd;
        line-height: 4rem;

        &:hover {
          background: #ddd;
        }
      }
    }
  }
`;

function AirportPicker({
  name,
  setVal,
  idx,
  value,
  fieldLabel,
  placeholder,
  flexBasis,
}) {
  // States
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
        const data = airports.filter((i) => i.iata === value);
      }
    },
    [value]
  );

  // HandleChange
  const handleChange = (e) => {
    const { value } = e.target;
    setVal(name, value);

    const filteredSuggestion = airports.filter((i) => {
      if (value.length === 3) {
        return i.iata.toLowerCase().includes(value.toLowerCase());
      } else {
        return (
          new RegExp(value, "i").test(i.iata) ||
          new RegExp(value, "i").test(i.name)
        );
      }
    });

    setSuggestion(filteredSuggestion.slice(0, 10));
  };

  const selectSuggestion = (val) => {
    const result = {
      name: val.name,
      iata: val.iata,
      continent: val.continent,
      type: val.type,
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
          value={value && value.name ? `${value.iata}-${value.name}` : value}
        />
        <div className="indicator"></div>
        {isFocused && (
          <div className="drop-menu">
            {suggestion.length > 0 ? (
              suggestion.map((i) => (
                <div
                  tabIndex="0"
                  key={i.iata}
                  onClick={() => selectSuggestion(i)}
                >
                  {i.iata}-{i.name}
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

export default AirportPicker;
