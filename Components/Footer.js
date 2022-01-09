import React, { useContext, useEffect, useState } from "react";
import CallToAction from "./Buttons/CallToAction";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__list">
        <div className="footer__item">
          <div className="footer__heading">ACCOUNT</div>

          <div className="footer__item--list">
            <a href="/login">Login</a>
          </div>

          <div className="footer__item--list start">
            <a href="/start">JOIN NOW</a>
          </div>
        </div>

        <div className="footer__item">
          <div className="footer__heading">HELP</div>
          <div className="footer__item--list">
            <a href="/aboutus">About us</a>
          </div>

          <div className="footer__item--list">
            <a href="/termsofuse">Terms and Services</a>
          </div>

          {/* <div className="footer__item--list">Profile</div> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
