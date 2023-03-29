import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import "../../App.css";
// import yarnImg from './yarn-g17ed4fe17_1280.jpg'

const Homepage = () => {
    return (
      <div className="homepage">
        <div id="banner">
          <div id="imgContainer">
            <h1 id="websiteTitle">Jumper Generator</h1>
          </div>
          <div id="blurb">
            <h2 className="slide-in">Pattern creation made easy</h2>
            <p className="slide-in">
              Create beautiful jumpers that will fit you to a tee in just a few
              clicks! No more math-induced headaches, you get to do the
              knitting, we handle the rest for you!
            </p>
            <div id="sign-up">
              <p>
                Create an account today and save your patterns in your own
                space:
              </p>
              <Link className="nav-button" to="/signin">
                Sign-up
              </Link>
            </div>
            <div id="sign-in">
              <p>Already a member? Pick up where you left off:</p>
              <Link className="nav-button" to="/signin">
                Sign-In
              </Link>
            </div>
          </div>
        </div>
        <div id="about">
          <p id="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link className="nav-button" to="/signin">
            Try the generator without an account
          </Link>
        </div>
      </div>
    );
};

export default Homepage;
