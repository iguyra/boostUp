import CallToAction from "../Components/Buttons/CallToAction";

const Navigation = ({ menuActive, openMenu }) => {
  return (
    <section
      //   onClick={openMenu}
      className={menuActive ? "navigation on" : "navigation"}
    >
      <div className="navigation__container">
        <div className="navigation__list">
          <div className="navigation__item">
            <a href="/login">Login</a>
          </div>
          <div className="navigation__item">
            <a href="/aboutus">About us</a>
          </div>
          <div className="navigation__item">
            <a href="/contact">Contact us</a>
          </div>

          <CallToAction />
        </div>
      </div>
      <div onClick={openMenu} className="navigation__close" id="close"></div>
    </section>
  );
};

export default Navigation;
