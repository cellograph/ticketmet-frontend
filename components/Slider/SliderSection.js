import React from "react";
import Head from "next/head";
import Slider from "react-slick";
import styled from "styled-components";

import MainSearch from "../Search/MainSearch";

const banners = ["/img/search.jpg", "/img/banner-1.jpg"];

const SliderSectionTag = styled.div`
  width: 100%;
  min-height: 60rem;
  position: relative;
`;

const SlideItemTag = styled.div`
  height: 60rem;
  box-sizing: border-box;
  max-height: 100%;
  width: 100%;
`;

const ImgTag = styled.img`
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  object-fit: cover;
`;

const SliderItem = ({ src }) => {
  return (
    <SlideItemTag>
      <ImgTag src={src} />
    </SlideItemTag>
  );
};

function SliderSection(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "slider",
    fade: true,
  };

  return (
    <SliderSectionTag>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Slider {...settings}>
        {banners.map((i, idx) => (
          <SliderItem key={idx} src={i} />
        ))}
      </Slider>
      <MainSearch />
    </SliderSectionTag>
  );
}

export default SliderSection;
