import React, { useEffect, useState, useRef } from "react";
import CallToAction from "./Buttons/CallToAction";
import Counter from "./Counter";
let imgArray = ["/static/gorg.jpg", "/static/gorg1.jpg", "/static/gorg2.jpg"];
let desktopImgArray = [
  "/static/ggm.jpg",
  "/static/gggm.jpg",
  "/static/g1.jpg",
  "/static/g2.jpg",
];

const Slides = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [heroActive, setHeroActive] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const { length } = imgArray;

  /// classes : IMG CONTAINER
  const slidesImageContainer = `${
    heroActive
      ? "slides__imageContainer fade show"
      : "slides__imageContainer fade"
  }`;

  console.log(imgLoaded, "loadedloaded");

  return (
    <section className="slides">
      <div className="slides__container">
        <div className="slides__bigHeader fadeIn">
          How do i get more jobs on LinkedIn?
        </div>
        <div className="slides__smallHeader fadeInUp">
          Join the Contrastly newsletter and become part of an awesome community
          of thousands of photographers! As a gift for signing up, we'll send
          you a starter pack of 25 Lightroom presets. Yep, it's totally free.{" "}
        </div>

        <CallToAction />

        <Counter />
      </div>
    </section>
  );
};

export default Slides;
