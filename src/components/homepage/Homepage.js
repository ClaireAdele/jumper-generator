import React, { useState } from "react";
import Banner from "./homepage-children/Banner"
import AuthenticationOptions from "./homepage-children/AuthenticationOptions";
import { Link } from "react-router-dom";
import "./Homepage.css";
import "../../App.css";
import Faq from "./homepage-children/Faq";
import About from "./homepage-children/About"

const Homepage = ({ navigate }) => {
    return (
      <div className="homepage">
        <Banner />
        <AuthenticationOptions navigate={navigate} />
        <Faq />
        <About />
      </div>
    );
};

export default Homepage;
