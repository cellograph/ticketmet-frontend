import React from "react";
import styled from "styled-components";
import Logo from "../../Logo";
import Navbar from "./Navbar";
import HeaderTopNav from "./HeaderTopNav";
import { Flexbasis } from "../../styles/helpers.styles";
import Helpdesk from "./Helpdesk";
import AuthNavigation from "./AuthNavigation";

const HeadNavigationTag = styled.div`
  width: 100%;
  height: calc(100% - 12.5%);
  display: flex;
  flex-direction: column;
`;

const LogoBannerSectionTag = styled.div`
  width: 100%;
  height: 85%;
`;

const LogoBannerTopTag = styled.div`
  width: 100%;
  padding: 0 10%;
  height: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LogoBannerBottomTag = styled.div`
  padding: 0 8%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BannerTag = styled.img`
  flex-basis: 40%;
  height: 75%;
  object-fit: fill;
`;

/**
 * todo: Add AuthNavigation
 */

function HeadNavigation(props) {
  return (
    <HeadNavigationTag>
      <LogoBannerSectionTag>
        <LogoBannerTopTag>
          <HeaderTopNav />
          <Flexbasis />
          <Helpdesk
            helpMobile="+880 1955-898711"
            helpMail="bhuiyanitt@gmail.com"
          />
        </LogoBannerTopTag>
        <LogoBannerBottomTag>
          <Logo src="/img/air-imperial.png" alt="Ticketmet Logo" />
          <BannerTag src="/img/banner-1.jpg" alt="Flight Booking." />
          <AuthNavigation />
        </LogoBannerBottomTag>
      </LogoBannerSectionTag>
      <Navbar />
    </HeadNavigationTag>
  );
}

export default HeadNavigation;
