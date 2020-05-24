import React from "react";
import styled from "styled-components";

const PassengerBTag = styled.div`
  flex-basis: 15%;
  height: 6rem;
  margin-right: 1rem;
  p {
    text-align: center;
    text-transform: uppercase;
  }
`;

const PassengerBoxTag = styled.div`
  min-width: 10rem;
  height: 3.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  border: 1px solid #ddd;

  span {
    flex-basis: 33%;
    display: inline-block;
    text-align: center;
    line-height: 3.2rem;
  }
  .btn {
    background: #e2e2e2;
    border: 0.5px solid #ddd;
    font-size: 1.8rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

function Passenger({ title, name, value, handleCount }) {
  return (
    <PassengerBTag>
      <p>{title}</p>
      <PassengerBoxTag>
        <span
          className="btn"
          onClick={() => {
            if (value > 0) {
              handleCount("decrement", name);
            }
          }}
        >
          -
        </span>
        <span>{value}</span>
        <span className="btn" onClick={() => handleCount("increment", name)}>
          +
        </span>
      </PassengerBoxTag>
    </PassengerBTag>
  );
}

export default Passenger;

// import React from "react";
// import { BsFillPersonFill } from "react-icons/bs";

// import { PassengerTag } from "../../../styles/helpers.styles";

// function Passenger(props) {
//   return (
    // <PassengerTag>
    //   <span className="label">PASSANGER</span>
    //   <div
    //     className="innerDiv"
    //     onClick={() => setShowPassenger(!showPassenger)}
    //   >
    //     <span>
    //       <BsFillPersonFill />
    //     </span>
    //     <div>
    //       {`${
    //         passengerState.child + passengerState.adult + passengerState.youth
    //       } Traveller`}
    //     </div>
    //   </div>
    //   {showPassenger && (
    //     <div className="popupDiv">
    //       <Passenger
    //         title="Adult"
    //         value={passengerState.adult}
    //         handleCount={setCount}
    //         name="adult"
    //       />

    //       <Passenger
    //         title="Youth"
    //         value={passengerState.youth}
    //         handleCount={setCount}
    //         name="youth"
    //       />

    //       <Passenger
    //         title="Child"
    //         value={passengerState.child}
    //         handleCount={setCount}
    //         name="child"
    //       />
    //     </div>
    //   )}
    // </PassengerTag>
//   );
// }

// export default Passenger;
