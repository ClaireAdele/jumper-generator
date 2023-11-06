import React, { useState } from "react";
import "../Homepage.css";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => {
//send data once updated
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputPassword = (event) => {
    setPassword(event.target.value);
  };
  
  return (
    // <div className="page-body">
    //   <div className="form-body">
    <>
      <div className="auth-form">
        <h3 className="form-title">Register</h3>
        <input
          type="text"
          placeholder="username"
          className="auth-input"
          onChange={handleInputEmail}
        ></input>
        <input
          type="text"
          placeholder="password"
          className="auth-input"
          onChange={handleInputPassword}
        ></input>
        <button className="auth-button" onClick={handleClick}>
          Submit
        </button>
      </div>
    </>
    //   </div>
    // </div>
  );
};

export default SignUp;
