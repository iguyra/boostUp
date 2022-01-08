import AuthFormInput from "../Components/Forms/AuthFormInput";

export default function Login() {
  return (
    <div className="login">
      <div className="site">
        <div className="site__name">letsLearn</div>
        <div className="benefitBox__smallHeading">LOGIN TO YOUR ACCOUNT</div>
      </div>

      <form className="form">
        <div className="form__container">
          <AuthFormInput value="red" label={"email"} />
          <AuthFormInput value="red" label={"password"} />
        </div>

        <button className="form__button">Login</button>
      </form>
    </div>
  );
}
