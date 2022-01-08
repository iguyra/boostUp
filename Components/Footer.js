import React, { useContext, useEffect, useState } from "react";
import CallToAction from "./Buttons/CallToAction";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__list">
        {/* <CallToAction /> */}

        <div className="footer__item">
          {/* <div className="footer__item--title">Quick Links</div> */}
          {/* <div className="footer__item--list now">START NOW</div> */}
          <div className="footer__item--list">
            <a href="/login">Login</a>
          </div>

          <div className="footer__item--list">
            <a href="/start">start</a>
          </div>
          <div className="footer__item--list">
            <a href="/login"> About us</a>
          </div>

          <div className="footer__item--list">
            <a href="/login"> terms and services</a>
          </div>
          <div className="footer__item--list">
            <a href="/watch"> watch</a>
          </div>

          {/* <div className="footer__item--list">Profile</div> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
