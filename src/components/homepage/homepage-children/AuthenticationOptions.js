import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./Sign-up";
import React, { useState } from "react";
import "../Homepage.css";
import "../../../App.css";

const AuthenticationOptions = ({ navigate }) => {
  const [userHasAccount, setUserHasAccount] = useState(true);

    return userHasAccount ? (
      <div id="pattern-creation-container">
        <div id="pattern-creation">
          <h2>Pattern creation made easy</h2>
          <p>Get a bespoke jumper pattern in just a few clicks!</p>
          <p>
            Enter your measurements and generate free jumper patterns fitted
            especially for you.
          </p>
          <p>
            Create an account to start saving your patterns - it’s easy, and you
            only need a username to do so!
          </p>
          <p>
            You can also use the site without an account, but you then won’t be
            able to save the patterns.
          </p>
          <Link
            className="nav-button"
            id="no-account-access-button"
            to="/data-entry"
          >
            Try the generator without an account
          </Link>
        </div>
        <SignIn navigate={navigate} setUserHasAccount={setUserHasAccount} />
      </div>
    ) : (
      <div id="pattern-creation-container">
        <div id="pattern-creation">
          <h2>Pattern creation made easy</h2>
          <p>Get a bespoke jumper pattern in just a few clicks!</p>
          <p>
            Enter your measurements and generate free jumper patterns fitted
            especially for you.
          </p>
          <p>
            Create an account to start saving your patterns - it’s easy, and you
            only need a username to do so! 
          </p>
          <p>
            You can also use the site without an account, but you then won’t be
            able to save the patterns.
          </p>
          <Link
            className="nav-button"
            id="no-account-access-button"
            to="/data-entry"
          >
            Try the generator without an account
          </Link>
        </div>
        <SignUp navigate={navigate} setUserHasAccount={setUserHasAccount} />
      </div>
    );
}

export default AuthenticationOptions;