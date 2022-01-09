import AuthFormInput from "../Components/Forms/AuthFormInput";
import TextArea from "../Components/Forms/TextArea";
import Layout from "../Components/Layout";
import HeaderName from "../Components/Modules/HeaderName";

export default function profile() {
  return (
    <Layout>
      <div className="login">
        <div className="login__container">
          <div className="site">
            <div className="benefitBox__smallHeading">
              Send us a message, we reply
            </div>
          </div>

          <div className="package">
            <form className="form">
              <div className="form__container">
                <AuthFormInput value="" label={"Full Name"} />
                <AuthFormInput value="" label={"Email"} />

                <TextArea label="message" />
              </div>
              <button className="form__button">send now</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
