import styled from "styled-components";

const CustomRadioButton = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  margin-left: 2rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0.4rem;
    left: 0;
    height: 2rem;
    width: 2rem;
    background-color: #eee;
    border-radius: 50%;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }

  .title {
    font-size: 1.4rem;
  }
`;

export default CustomRadioButton;
