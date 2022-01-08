import AuthFormInput from "../Components/Forms/AuthFormInput";
import router from "next/router";

export default function Login() {
  const handleSubmit = () => {
    router.push("/profile");
  };

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

        <button onSubmit={handleSubmit} className="form__button">
          Login
        </button>
      </form>
    </div>
  );
}
