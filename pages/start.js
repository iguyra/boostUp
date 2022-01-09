import AuthFormInput from "../Components/Forms/AuthFormInput";
import HeaderName from "../Components/Modules/HeaderName";

export default function signup() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="site">
          <HeaderName />
          <div className="benefitBox__smallHeading">GET STARTED</div>
        </div>

        <div className="package">
          <form className="form">
            <div className="form__container">
              <AuthFormInput value="" label={"Full Name"} />
              <AuthFormInput value="" label={"Email"} />
              <AuthFormInput value="" label={"Phone Number"} />

              <AuthFormInput value="" label={"password"} />
              <AuthFormInput value="" label={"confrim password"} />
            </div>
            <button className="form__button">start now</button>
          </form>

          <div className="package__summary">
            <div className="package__container">
              <div className="package__heading">SUMMARY</div>

              <div className="package__list">
                <div className="package__item">
                  <span> Gold package - LinkedIn Jobs</span>
                  <div className="">200GHS</div>
                </div>
              </div>
            </div>

            {/* <button className="form__button">START NOW</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
