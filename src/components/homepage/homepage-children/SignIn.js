import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Homepage.css";

const SignIn = ({ navigate, setUserHasAccount }) => {
  const [email, setEmail] = useState();

  const handleClick = () => {
    navigate("/profile");
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClickSignUp = (event) => {
    setUserHasAccount(false);
  };

  return (
    <div className="auth-form">
      <div className="form-container">
        <h2 className="form-title">Sign-In</h2>
        <input
          type="text"
          placeholder="Username"
          className="auth-input"
          onChange={handleInputEmail}
        ></input>
        <button className="auth-button" onClick={handleClick}>
          Submit
        </button>
        <p onClick={handleClickSignUp} className="account-yes-no">
          No account yet? Register now
        </p>
      </div>
    </div>
  );
};

export default SignIn;
