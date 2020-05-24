import styled from "styled-components";

export const DatePickerContainer = styled.div`
  min-width: 10rem;
  min-height: 10rem;
  position: absolute;
  top: 6rem;
  left: 0;
  background: #fff;
  z-index: 100;
  padding: 1rem;
  border: ${(props) => (props.border ? props.border : "1px solid #ddd")};
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 5rem;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MonthListContainer = styled.div`
  min-width: 30rem;
  min-height: 20rem;
  overflow: auto;
  display: grid;
  grid-template-areas: repeat(
    ${(props) => (props.activeMonths ? props.activeMonths.length : 1)},
    30rem
  );
  grid-template-rows: 38rem;
  overflow-x: none;
`;
