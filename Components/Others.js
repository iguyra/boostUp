import React, { useContext, useEffect, useState } from "react";
import CallToAction from "./Buttons/CallToAction";
import AbsoluteSvg from "./Modules/AbsoluteSvg";
import Welcome from "./Welcome";

const Others = () => {
  return (
    <section className="save">
      <AbsoluteSvg />
      <div className="save__gradient">
        <div className="save__container">
          <div className="col">
            <Welcome />

            <div className="">
              <div data-aos="fade-up" className="save__heading">
                Expand, Build and BoostUp your knowledge about the Job market
              </div>

              <div className="save__list">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="save__item"
                >
                  <div className="save__bigNumber">1</div>
                  <div className="save__bottom">
                    <div className="save__itemHeading">
                      Need help ? No problem
                    </div>
                    <div className="save__itemWords">
                      with ever ready team of expects, be assured of quality
                      support with whatever help you need
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up" className="save__item">
                  <div className="save__bigNumber">2</div>
                  <div className="save__bottom">
                    <div className="save__itemHeading">
                      Expand your network = more jobs
                    </div>
                    <div className="save__itemWords">
                      meet people who are doing the same thing you are doing,
                      which open doors for more jobs
                    </div>
                  </div>
                </div>

                <div data-aos="fade-down" className="save__item">
                  <div data-aos="fade-down" className="save__bigNumber">
                    3
                  </div>
                  <div className="save__bottom">
                    <div className="save__itemHeading">
                      Best resouces at your displosal
                    </div>
                    <div className="save__itemWords">
                      With expects who have spend years gathering resouces and
                      all these resouces at your disposal
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="IconImage">
              <img
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                src="/static/t.png"
                alt=""
              />
            </div> */}
          </div>
        </div>

        <CallToAction />
      </div>
    </section>
  );
};

export default Others;
