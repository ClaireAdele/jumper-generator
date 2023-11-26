import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./Sign-up";
import React, { useState } from "react";
import "../Homepage.css";
import "../../../App.css";
import yarnSvg from "../homepage_assets/yarn.svg"
import jumperSvg from "../homepage_assets/jumper-thin.svg"
import knittingSvg from "../homepage_assets/knitting.svg"

const PatternCreationMadeEasy = ({ navigate }) => {
  const [userHasAccount, setUserHasAccount] = useState(true);

  return (
    <div id="pattern-creation-container">
      <div id="pattern-creation">
        <h2>Pattern creation made easy</h2>
        <div id="columns-text">
          <div className="pattern-creation-card">
            <img className="svgImg" src={jumperSvg}></img>
            <p>
              Get a <b>bespoke jumper pattern</b> in just a few clicks!
            </p>
            <p>
              Enter your measurements and generate{" "}
              <b>free jumper patterns fitted especially for you.</b>
            </p>
          </div>

          <div className="pattern-creation-card">
            <img className="svgImg" src={knittingSvg}></img>
            <p>
              Use this jumper pattern generator to{" "}
              <b>kick-start your design process!</b>
            </p>
            <p>
              Pick between different <b>jumper shapes</b>, <b>levels of ease</b>{" "}
              and <b>neckline options</b>.
            </p>
          </div>

          <div className="pattern-creation-card">
            <img className="svgImg" src={yarnSvg}></img>
            <p>
              <b>Create an account to start saving your patterns.</b>
            </p>
            <p>
              It’s easy, and you only need a <b>username</b> to do so!
            </p>
          </div>
        </div>

        <Link
          className="main-button-style"
          id="no-account-access-button"
          to="/data-entry"
        >
          Try the generator without an account
        </Link>
      </div>
      {userHasAccount ? (
        <SignIn navigate={navigate} setUserHasAccount={setUserHasAccount} />
      ) : (
        <SignUp navigate={navigate} setUserHasAccount={setUserHasAccount} />
      )}
    </div>
  );
}

export default PatternCreationMadeEasy;