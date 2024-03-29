import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Navigation from "../Components/Navigation";
import HeaderName from "./Modules/HeaderName";

const Heading = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const openMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <section className="header">
      <div className="header__container">
        <HeaderName />

        <div onClick={openMenu} className="header__menu">
          <i class="fas fa-bars"></i>

          <Navigation menuActive={menuActive} />
        </div>
      </div>
      {/* <Navigation openMenu={"openMenu"} menuActive={"menuActive"} /> */}
    </section>
  );
};

export default Heading;
