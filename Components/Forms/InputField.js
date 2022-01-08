import React, { useContext, useEffect, useState } from "react";

const InputField = (name, type, value, required) => {
  return (
    <div className="inputField">
      <input
        className="siginin__input"
        name={name}
        type={type ? type : "text"}
        id={name}
        // placeholder="first name"

        required={required}
        value={value}
      />
    </div>
  );
};

export default InputField;
