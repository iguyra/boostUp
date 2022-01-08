import React, { useContext, useEffect, useState } from "react";
import CallToAction from "./Buttons/CallToAction";

const Why = () => {
  return (
    <section className="why">
      <div className="benefitBox__absolute">
        {/* <i class="fas fa-comment-alt"></i> */}
        <img src="/static/sv1.svg" alt="" />
      </div>
      <div className="benefitBox__container">
        <div className="benefitBox__bigHeading black">
          Get help from the top expects in the field
        </div>
        <div className="benefitBox__smallHeading black">
          Shop our industry-leading ebooks, video courses, Lightroom presets &
          profiles, and Photoshop actions{" "}
        </div>
        <div className="IconImage">
          <img src="/static/s.png" alt="" />
        </div>
        {/* <CallToAction /> */}
      </div>
      <div className="benefitBox__container">
        <div className="benefitBox__bigHeading black">
          Secure your future witht the perfect skills
        </div>
        <div className="benefitBox__smallHeading black">
          Shop our industry-leading ebooks, video courses, Lightroom presets &
          profiles, and Photoshop actions{" "}
        </div>
        <div className="IconImage">
          <img src="/static/s1.png" alt="" />
        </div>
        {/* <CallToAction /> */}
      </div>
      <div className="benefitBox__container">
        <div className="benefitBox__bigHeading black">
          Work from home, be your own boss
        </div>
        <div className="benefitBox__smallHeading black">
          Shop our industry-leading ebooks, video courses, Lightroom presets &
          profiles, and Photoshop actions{" "}
        </div>
        <div className="IconImage">
          <img src="/static/hero.jpg" alt="" />
        </div>
        {/* <CallToAction /> */}
      </div>
    </section>
  );
};

export default Why;
