import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./Sign-up";
import React, { useState } from "react";
import "../Homepage.css";
import "../../../App.css";
import yarnSvg from "../homepage_assets/yarn.svg"
import jumperSvg from "../homepage_assets/jumper-thin.svg"
import knittingSvg from "../homepage_assets/knitting.svg"

const AuthenticationOptions = ({ navigate }) => {
  const [userHasAccount, setUserHasAccount] = useState(true);

    return userHasAccount ? (
      <div id="pattern-creation-container">
        <div id="pattern-creation">
          <h2>Pattern creation made easy</h2>
          <div id="columns-text">
            <div className="pattern-creation-card">
              <img className="svgImg" src={jumperSvg}></img>
              <p>Get a bespoke jumper pattern in just a few clicks!</p>
              <p>
                Enter your measurements and generate free jumper patterns fitted
                especially for you.
              </p>
            </div>

            <div className="pattern-creation-card">
              <img className="svgImg" src={knittingSvg}></img>
              <p>
                Use this jumper pattern generator to kick-start your design
                process!
              </p>
              <p>
                Pick between different jumper shapes, levels of ease and
                neckline options.
              </p>
            </div>

            <div className="pattern-creation-card">
              <img className="svgImg" src={yarnSvg}></img>
              <p>Create an account to start saving your patterns.</p>
              <p>It’s easy, and you only need a username to do so!</p>
            </div>
          </div>
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
          <div id="columns-text">
            <div className="pattern-creation-card">
              <img className="svgImg" src={jumperSvg}></img>
              <p>Get a bespoke jumper pattern in just a few clicks!</p>
              <p>
                Enter your measurements and generate free jumper patterns fitted
                especially for you.
              </p>
            </div>

            <div className="pattern-creation-card">
              <img className="svgImg" src={knittingSvg}></img>
              <p>
                Use this jumper pattern generator to kick-start your design
                process!
              </p>
              <p>
                Pick between different jumper shapes, levels of ease and
                neckline options.
              </p>
            </div>

            <div className="pattern-creation-card">
              <img className="svgImg" src={yarnSvg}></img>
              <p>Create an account to start saving your patterns.</p>
              <p>It’s easy, and you only need a username to do so!</p>
            </div>
          </div>
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