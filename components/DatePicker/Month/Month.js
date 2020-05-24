import React from "react";
import { useMonth, CalendarDay, FirstDayOfWeek } from "@datepicker-react/hooks";
import styled, { keyframes } from "styled-components";

import Day from "../Day/Day";

const MonthTag = styled.div`
  padding: 1rem;
  width: 30rem;
  .headline {
    text-align: center;
    width: 100%;
    height: 5rem;
    line-height: 5rem;
  }

  .dayList {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: center;
  }
`;

const DaysTag = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  margin-bottom: 10px;
  font-size: 10px;
`;

const Month = ({
  year,
  month,
  firstDayOfWeek,
  dayLabelFormat,
  weekdayLabelFormat,
  monthLabelFormat,
}) => {
  const { days, weekdayLabels, monthLabel } = useMonth({
    dayLabelFormat,
    monthLabelFormat,
    weekdayLabelFormat,
    year,
    month,
    firstDayOfWeek,
  });

  return (
    <MonthTag>
      <div className="headline">
        <strong>{monthLabel}</strong>
      </div>
      <DaysTag>
        {weekdayLabels.map((day) => (
          <div style={{ textAlign: "center" }} key={day}>
            {day}
          </div>
        ))}
      </DaysTag>
      <div className="dayList">
        {days.map((day, idx) => {
          if (typeof day === "object") {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                day={day.dayLabel}
              />
            );
          }
          return <div key={idx} />;
        })}
      </div>
    </MonthTag>
  );
};

export default Month;
