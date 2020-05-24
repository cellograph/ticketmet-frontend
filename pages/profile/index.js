import React, { useContext } from "react";
import { PageLayoutTag, LayoutContentTag } from "..";
import HeaderSection from "../../components/Header/HeaderSection";
import HomePageFooter from "../../components/Footer/HomePageFooter";
import ProfileCard from "../../components/ProfileCard";
import Router from "next/router";
import UserContext from "../../components/Context/UserContext";
import UserWrapper from "../../components/Wrapper/UserWrapper";

const ProfilePage = (props) => {
  return (
    <UserWrapper>
      <PageLayoutTag>
        <HeaderSection />
        <LayoutContentTag>
          <ProfileCard />
          <HomePageFooter />
        </LayoutContentTag>
      </PageLayoutTag>
    </UserWrapper>
  );
};

export default ProfilePage;
