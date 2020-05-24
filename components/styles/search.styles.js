import styled from "styled-components";

export const SearchFormTag = styled.form`
  width: 100%;
  min-height: 3rem;
`;

export const SearchFormGridTag = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-areas: "box search";
  grid-template-columns: 70% 28%;
`;

export const SearchFormBoxTag = styled.div`
  grid-area: box;
`;

export const SearchFormSearchTag = styled.div`
  grid-area: search;
`;

export const SearchFormRowTag = styled.div`
  width: 100%;
  min-height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
`;

export const SearchBtn = styled.button`
  font-weight: bold;
  border: none;
  outline: none;
  background: coral;
  font-size: 1.8rem;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  color: #fff;
  border-radius: 8px;
`;

export const NormalBtn = styled.button`
  font-weight: bold;
  border: none;
  outline: none;
  background: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #000;
  border-radius: 8px;
  margin: 0 1rem;
`;

export const PassengerTag = styled.div`
  flex-basis: 60%;
  margin-right: 1%;
  position: relative;
  border: 1px solid #ddd;
  height: 5rem;

  .label {
    position: absolute;
    top: -1.5rem;
    left: 1rem;
    background: #fff;
    display: inline-block;
    padding: 0 1rem;
    font-size: 1.4rem;
    z-index: 100;
    text-transform: uppercase;
    font-weight: bold;
  }

  .popupDiv {
    position: absolute;
    top: 5rem;
    right: 3rem;
    min-width: 30rem;
    min-height: 10rem;
    background: #fff;
    border: 1px solid #ddd;
    z-index: 100;
    font-size: 1.4rem;
    padding: 0 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    -webkit-box-shadow: 2px 2px 16px -5px rgba(0, 0, 0, 0.42);
    -moz-box-shadow: 2px 2px 16px -5px rgba(0, 0, 0, 0.42);
    box-shadow: 2px 2px 16px -5px rgba(0, 0, 0, 0.42);
  }

  .innerDiv {
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    span {
      margin: 0 0.5rem;
      font-size: 2rem;
    }

    div {
      padding: 0 0.5rem;
      font-size: 1.6rem;
    }
  }
`;

export const MutiCityAddRowTag = styled.div`
  width: 50%;
  height: 4rem;
  border: 1px solid navy;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  button {
    border: none;
    outline: none;
    font-size: 1.4rem;
    color: navy;
    background: none;
    cursor: pointer;

    span {
      margin-right: 1rem;
    }
  }
`;
