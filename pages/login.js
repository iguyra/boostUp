import AuthFormInput from "../Components/Forms/AuthFormInput";
import router from "next/router";
import HeaderName from "../Components/Modules/HeaderName";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("eeeeeee");

    router.push("/profile");
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="site">
          <HeaderName />
          <div className="benefitBox__smallHeading">LOGIN TO YOUR ACCOUNT</div>
        </div>

        <form className="form">
          <div className="form__container">
            <AuthFormInput value="admin" label={"email"} />
            <AuthFormInput value="admin" label={"password"} />
          </div>

          <button onClick={(e) => handleSubmit(e)} className="form__button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
