import styled from "styled-components";

export const Flexbasis = styled.div`
  flex-basis: ${(props) => (props.flexBasis ? props.flexBasis : "20%")};
`;

export const OfferTag = styled.div`
  width: 80%;
  height: 15rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;

  div {
    flex-basis: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .icon {
      flex-basis: 10%;
      margin-right: 2%;
      font-size: 3rem;
      line-height: 4rem;
    }

    .text {
      flex-basis: 70%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;

export const BigNormalText = styled.p`
  font-size: ${(props) => (props.fsz ? props.fsz : "2rem")};
  line-height: 2.5rem;
`;

export const BigBoldText = styled.p`
  font-size: ${(props) => (props.fsz ? props.fsz : "2rem")};
  font-weight: bold;
`;

export const FooterTag = styled.div`
  width: 80%;
  min-height: 30rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  div {
    flex-basis: ${(props) => (props.fxb ? props.fxb : "23%")};
    color: #fff;

    img {
      width: 40%;
      height: 10rem;
      object-fit: fill;
    }

    address {
      p {
        font-size: 1.6rem;
      }
    }

    .footer-nav {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .item {
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.4rem;
        padding: 0 1rem;
        color: #fff;

        span {
          margin-right: 5px;
        }
      }
    }
  }
`;

export const BigHeadText = styled.h2`
  font-size: 2.5rem;
  color: orange;
`;

