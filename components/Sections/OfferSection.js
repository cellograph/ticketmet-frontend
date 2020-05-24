import React from "react";
import { BigBoldText, BigNormalText, OfferTag } from "../styles/helpers.styles";
import { FaClipboardCheck } from "react-icons/fa";
import HomePageBodySection from "./HomePageBodySection";

function OfferSection(props) {
  return (
    <HomePageBodySection bg="#fff">
      <OfferTag>
        <div>
          <div className="icon">
            <FaClipboardCheck />
          </div>
          <div className="text">
            <BigNormalText>Lowest Budget Airlines</BigNormalText>
            <BigBoldText>Fare Gurantee</BigBoldText>
          </div>
        </div>
        <div>
          <div className="icon">
            <FaClipboardCheck />
          </div>
          <div className="text">
            <BigNormalText>Easy Book In</BigNormalText>
            <BigBoldText>Just 3 Steps</BigBoldText>
          </div>
        </div>
        <div>
          <div className="icon">
            <FaClipboardCheck />
          </div>
          <div className="text">
            <BigNormalText>24x365 Days</BigNormalText>
            <BigBoldText>Free Phone Assistance</BigBoldText>
          </div>
        </div>
      </OfferTag>
    </HomePageBodySection>
  );
}

export default OfferSection;
