import React, { useState } from "react";
import "../Homepage.css";

const SignUp = ({ setUserHasAccount }) => {
  const [username, setUsername] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [answerSecurityQuestion, setAnswerSecurityQuestion] = useState("-");
  const [authError, setAuthError] = useState("");

  const handleClick = () => {
    if (answerSecurityQuestion == "-")
      setAuthError("You must provide an answer to the security question");
  };

  const handleInputUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleSelectSecurityQuestion = (event) => {
    console.log(event.target.value);
    setSecurityQuestion(event.target.value);
  };

  const handleAnswerSecurityQuestion = (event) => {
    setAnswerSecurityQuestion(event.target.value);
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
        <button className="auth-button" onClick={handleClick}>
          Submit
        </button>
        <p onClick={handleClickSignIn} className="account-yes-no">
          Already have an account? Sign-in now.
        </p>
      </div>
      </div>
  );
};

export default SignUp;


{/* <label>Choose a security question:</label>
        <select
          name="security-question-form"
          id="security-question-dropdown"
          onChange={handleSelectSecurityQuestion}
        >
          <option>-</option>
          <option>What was the name of your first pet?</option>
          <option>In what city were you born?</option>
          <option>What high school did you attend?</option>
          <option>What was your mother's maiden name</option>
        </select>
        <input
          type="text"
          placeholder="Answer security question"
          className="auth-input"
          onChange={handleAnswerSecurityQuestion}
        ></input> */}
