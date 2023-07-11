import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <article className="home-article">
        <div className="welcome">
          <img src="./assets/walleHeader.png" alt="Asteroid image" />
          <h1>Welcome!</h1>
          <img src="./assets/evaHeader.png" alt="Wall-e image" />
        </div>
        <h3>Let's introduce you to this amazing site.</h3>
        <p>
          We want to show you the selected photos from the NASA's API for each
          day you choose.
        </p>
        <ul>
          You can choose from both different APIs: <br />
          <span>(if you don't choose one, API APOD will be used).</span>
          <li>
            APOD makes you travel around de galaxy. Seeing the Astronomical
            Picture Of the Day.
          </li>
          <li>
            MARS ROVER shows you the vision of the Rovers from Mars; there are
            three: Curiosity, Spirit and Opportunity.
          </li>
        </ul>
        <p>
          Do you want to start? Then select a date and an API from the upside
          options and press 'Start'!
        </p>
        <h3 className="enjoy">Enjoy de trip! 🌱</h3>
      </article>
    </>
  );
};

export default Home;
