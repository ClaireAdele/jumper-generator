import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInUser } from "../../../services-and-util-functions/auth-services";
import "../Homepage.css";

const SignIn = ({ navigate, setUserHasAccount }) => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [authError, setAuthError] = useState("");

  const handleClick = async () => {
    console.log(email)
    if (!email || !password) {
      setAuthError(
        "Please make sure your e-mail and passwords are correct"
      );
      return;
    }

    try {
      await signInUser(email, password);

      navigate("/profile");
    } catch(error) {
      setAuthError(error.message);
    }
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputPassword = (event) => { 
    setPassword(event.target.value);
  }

  const handleClickSignUp = (event) => {
    setUserHasAccount(false);
  };

  return (
    <div className="auth-form">
      <div className="form-container">
        <h2 className="form-title">Sign-In</h2>
        <input
          type="text"
          placeholder="e-mail"
          className="auth-input"
          onChange={handleInputEmail}
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="auth-input"
          onChange={handleInputPassword}
        ></input>
        <button className="auth-button" onClick={handleClick}>
          Submit
        </button>
        {authError && <p>{authError}</p>}
        <p onClick={handleClickSignUp} className="account-yes-no">
          No account yet? Register now
        </p>
      </div>
    </div>
  );
};

export default SignIn;
