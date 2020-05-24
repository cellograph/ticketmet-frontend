import React from "react";
import { PageLayoutTag, LayoutContentTag } from "../index";
import HeaderSection from "../../components/Header/HeaderSection";
import HomePageFooter from "../../components/Footer/HomePageFooter";
import SearchValueCard from "../../components/Sections/SearchValueCard";

const SearchPage = (props) => {
  return (
    <PageLayoutTag>
      <HeaderSection />
      <LayoutContentTag>
        <SearchValueCard />
        <HomePageFooter />
      </LayoutContentTag>
    </PageLayoutTag>
  );
};

export default SearchPage;
