import React, { useContext, useEffect, useState } from "react";
import CallToAction from "./Buttons/CallToAction";

const Welcome = ({ image, heading }) => {
  return (
    <section className="welcome">
      <div className="benefitBox__container">
        <div className="welcome__to">
          {heading || "Welcome To Where The Future Works"}
        </div>
        <div className="IconImage">
          <img data-aos="flip-right" src={image || "/static/kind.png"} alt="" />
        </div>
        <CallToAction />
      </div>
    </section>
  );
};

export default Welcome;
