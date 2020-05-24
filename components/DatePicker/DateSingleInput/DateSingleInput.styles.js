import styled from "styled-components";

export const PickerContainer = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  border: ${(props) => (props.border ? props.border : "1px solid #ddd")};
`;
