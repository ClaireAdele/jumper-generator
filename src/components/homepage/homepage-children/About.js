import myPicture from "../23270583_1474670032623870_2628779597240232760_o.jpg"

const About = () => {
    return (
      <div id="about">
        <img id="my-picture" src={myPicture} alt="website-creator-picture"></img>
        <p id="about-me">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    );
}

export default About;