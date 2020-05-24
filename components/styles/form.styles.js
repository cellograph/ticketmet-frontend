import styled from "styled-components";

export const InputTag = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "4rem")};
  padding: 0 2rem;
  line-height: 1.8;
  font-size: 1.6rem;
  color: #000;
  border: 1px solid #ddd;
`;

export const SelectTag = styled.select`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "4rem")};
  option {
    padding: 0 2rem;
    line-height: 1.8;
    font-size: 1.6rem;
    color: #000;
  }
`;

export const FormGroupTag = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  min-height: ${(props) => (props.height ? props.height : "5rem")};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    width: 100%;
    height: 3rem;
    font-size: 1.4rem;
    color: darkgray;
  }
`;

export const FormTag = styled.form`
  width: ${(props) => (props.width ? props.width : "100%")};
  min-height: ${(props) => (props.height ? props.height : "10rem")};
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: ${(props) =>
    props.variant ? (props.variant === "primary" ? "navy" : "navy") : "navy"};
  color: #fff;
  padding: 0.8rem 2rem;
  font-weight: bold;
  border-radius: 8px;
`;
