import React from "react";
import "./404.css";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <article className="notFound-container">
        <h3 className="sorry-h3">Sorry! Page not found.</h3>
        <img
          className="notFound-img"
          src="./assets/404.png"
          alt="404 image"
        />
        <NavLink to="/">
          <button className="back-button">Take me back home! 🌍</button>
        </NavLink>
        <p className="try-again">Or try with another date!</p>
      </article>
    </>
  );
};

export default NotFound;
