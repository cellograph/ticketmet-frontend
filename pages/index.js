import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import HeaderSection from "../components/Header/HeaderSection";
import SliderSection from "../components/Slider/SliderSection";
import HomePageBodySection from "../components/Sections/HomePageBodySection";
import OfferSection from "../components/Sections/OfferSection";
import HomePageFooter from "../components/Footer/HomePageFooter";
import UserProvider from "../components/Context/UserProvider";

export const PageLayoutTag = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 20rem auto;
`;

export const LayoutContentTag = styled.section`
  grid-area: content;
  background: #ebf2f7;
  overflow: auto;
  overflow-x: hidden;
`;

const Demo = (props) => {};

function index(props) {
  return (
    <PageLayoutTag>
      <HeaderSection />
      <LayoutContentTag>
        <SliderSection />
        <OfferSection />
        <HomePageFooter />
      </LayoutContentTag>
    </PageLayoutTag>
  );
}

export default index;
