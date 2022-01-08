import React, { useContext, useEffect, useState } from "react";
import CallToAction from "./Buttons/CallToAction";
import AbsoluteSvg from "./Modules/AbsoluteSvg";

const Benefits = () => {
  return (
    <section className="Benefits">
      <div className="Benefits__container">
        <div data-aos="fade-up" className="benefitBox">
          <div className="IconImage">
            <img data-aos="fade-up" src="/static/hero.jpg" alt="" />
          </div>
          <div className="benefitBox__container">
            <div className="benefitBox__bigHeading">
              Now is your moment to build a better tomorrow
            </div>
            <div className="benefitBox__smallHeading">
              Shop our industry-leading ebooks, video courses, Lightroom presets
              & profiles, and Photoshop actions
            </div>
          </div>

          <AbsoluteSvg />
          <AbsoluteSvg url="/static/b.png" />
        </div>
        <div data-aos="fade-down" className="benefitBox two">
          <div className="benefitBox__container">
            <div className="benefitBox__bigHeading">
              Learn from the best, Earn from the rest
            </div>
            <div className="benefitBox__smallHeading">
              Shop our industry-leading ebooks, video courses, Lightroom presets
              & profiles, and Photoshop actions
            </div>
          </div>

          <AbsoluteSvg />
        </div>
        <div data-aos="fade-up" className="benefitBox three">
          <div className="benefitBox__container">
            <div className="benefitBox__bigHeading">
              Improve or Learn new skills while making money
            </div>
            <div className="benefitBox__smallHeading">
              Shop our industry-leading ebooks, video courses, Lightroom presets
              & profiles, and Photoshop actions
            </div>
          </div>

          <AbsoluteSvg />

          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
