// const { handleChange } = require("shared/functions/formFunctions");
// import ErrorField from "../../components/Modules/ErrorField";

const AuthFormInput = ({
  value,
  inputField,
  errorFieldMsg,
  setErrorFieldMsg,
  setInputField,
  label,
  name,
  type,
  required,
}) => {
  return (
    <div className="form__formgroup">
      <label className="form__label" htmlFor="storeName">
        {label}
      </label>

      <div className="">
        <input
          className="form__input"
          name={name}
          type={type ? type : "text"}
          id={name}
          // placeholder="first name"

          required={required}
          value={value}
        />

        {/* <ErrorField errorFieldMsg={errorFieldMsg[name]} /> */}
        {/* <span
              className={errorFieldMsg.storeName ? "errorField active" : "errorField"}
            >
              {errorFieldMsg.storeName}
            </span> */}
      </div>
    </div>
  );
};

export default AuthFormInput;
