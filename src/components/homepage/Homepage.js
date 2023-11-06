import React, { useState } from "react";
import Banner from "./homepage-children/Banner"
import AuthenticationOptions from "./homepage-children/AuthenticationOptions";
import { Link } from "react-router-dom";
import "./Homepage.css";
import "../../App.css";

const Homepage = ({ navigate }) => {
    return (
      <div className="homepage">

        <Banner />
        <AuthenticationOptions navigate={ navigate } />
       
        <div id="about">
          <p id="description">
            This website uses Elizabeth Zimmerman's approach to help you create beautiful jumpers that will fit you perfectly.
            Once you enter your measurements and the gauge you are knitting at, it will generate a pattern that you can follow if you wish,
            as well as the measurements for each piece of your jumper if you don't need as much guidance and just want the numbers. 
            Over time, I am hoping to increase its complexity to let you generate pattern for an increasing variety of jumpers - for now,
            it will support 2 simple shapes: yoke jumpers, knitted bottom-up, and drop-shoulder jumpers with one body piece and sleeves that need attaching. 
            Creating an account will let you save your patterns and measurements so you can generate more of them easily. 
          </p>
          <Link className="nav-button" to="/data-entry">
            Try the generator without an account
          </Link>
        </div>
      </div>
    );
};

export default Homepage;
