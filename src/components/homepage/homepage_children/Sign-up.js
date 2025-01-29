import React, { useState } from "react";
import { signUpUser } from "../../../services-and-util-functions/auth-services";
import "../Homepage.css";

const SignUp = ({ setUserHasAccount }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [authError, setAuthError] = useState("");

  const handleClick = async () => {
    try {
      if (username == "" || password == "" || email == "") {
        throw new Error("Please make sure to enter a correct username, password and email")
      }

      await signUpUser(username, email, password);
      setUserHasAccount(true);
    } catch (err) { 
      setAuthError(err.message);
    } 
  };

  const handleInputUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleInputPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClickSignIn = (event) => {
    setUserHasAccount(true);
  };

  return (
    <div className="auth-form">
      <div className="form-container">
        <h2 className="form-title">Register</h2>
        <input
          type="text"
          placeholder="Username"
          className="auth-input"
          onChange={handleInputUsername}
        ></input>
        <input
          type="text"
          placeholder="Email"
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
        <p onClick={handleClickSignIn} className="account-yes-no">
          Already have an account? Sign-in now.
        </p>
      </div>
    </div>
  );
};

export default SignUp;