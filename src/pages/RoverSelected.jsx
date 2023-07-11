import React from "react";
import "./RoverSelected.css";
import SlideShow from "../components/SlideShow";
import NotFound from "./404";
import { NavLink } from "react-router-dom";

const RoverSelected = ({ date, MarsBox }) => {
  return (
    <>
      {MarsBox.length === 0 ? (
        <NotFound />
      ) : MarsBox.photos.length === 0 ? (
        <NotFound />
      ) : (
        <article className="rover-article">
          <h4 className="rover-h4">
            This are Mars photos from the Rover 'Curiosity' for {date}
          </h4>
          <SlideShow MarsBox={MarsBox} />
          <div className="options">
            <p className="option">Try with another date, change API or</p>
            <NavLink to="/">
              <button className="back-button">Take me back home! 🌍</button>
            </NavLink>
          </div>
        </article>
      )}
    </>
  );
};

export default RoverSelected;
