import React from "react";

import HomePageBodySection from "../Sections/HomePageBodySection";
import { FooterTag } from "../styles/helpers.styles";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function HomePageFooter(props) {
  return (
    <HomePageBodySection bg="navy">
      <FooterTag>
        <div>
          <img src="/img/footerLogo.png" />
        </div>
        <div fxb="30">
          <h3>Address</h3>
          <address>
            <p>769, West Shewrapara, Mirpur Dhaka 1216</p>
            <p>Mail: bhuiyanitt@gmail.com</p>
            <p>Mobile: +880 1955898711</p>
          </address>
        </div>
        <div fxb="15%">
          <h3>Useful Links</h3>
          <div className="footer-nav">
            <Link href="#">
              <a className="item">
                {" "}
                <span>
                  <FaArrowRight />
                </span>{" "}
                About Us
              </a>
            </Link>
            <Link href="#">
              <a className="item">
                {" "}
                <span>
                  <FaArrowRight />
                </span>{" "}
                Contact Us
              </a>
            </Link>
            <Link href="#">
              <a className="item">
                {" "}
                <span>
                  <FaArrowRight />
                </span>{" "}
                Privacy Policy
              </a>
            </Link>
            <Link href="#">
              <a className="item">
                {" "}
                <span>
                  <FaArrowRight />
                </span>{" "}
                Terms & Conditions
              </a>
            </Link>
          </div>
        </div>
        <div fxb="15%">
          <h3>Resources</h3>
          <div className="footer-nav">
            <Link href="#">
              <a className="item">
                {" "}
                <span>
                  <FaArrowRight />
                </span>{" "}
                Find best deals
              </a>
            </Link>
            <Link href="#">
              <a className="item">
                {" "}
                <span>
                  <FaArrowRight />
                </span>{" "}
                Get Promo
              </a>
            </Link>
            <Link href="#">
              <a className="item">
                {" "}
                <span>
                  <FaArrowRight />
                </span>{" "}
                Travel
              </a>
            </Link>
            <Link href="#">
              <a className="item">
                {" "}
                <span>
                  <FaArrowRight />
                </span>{" "}
                Payments
              </a>
            </Link>
          </div>
        </div>
      </FooterTag>
    </HomePageBodySection>
  );
}

export default HomePageFooter;
