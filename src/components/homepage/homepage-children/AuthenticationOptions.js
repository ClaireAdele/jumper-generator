import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./Sign-up";
import "../Homepage.css";
import "../../../App.css";

const AuthenticationOptions = ({ navigate }) => {
    return (
      <>
        <div id="blurb">
          <h2 className="slide-in">Pattern creation made easy</h2>
            <p className="slide-in">
            Create beautiful jumpers that will fit you to a tee in just a few
            clicks! No more math-induced headaches, you get to do the knitting,
            we handle the rest for you! 
            To register and start saving your patterns, you only need a username and a password - we don't need an e-mail address from you.
          </p>
          <div id="auth-options">
            <SignIn navigate={ navigate } />
            <SignUp />
          </div>
        </div>
      </>
    );
}

export default AuthenticationOptions;