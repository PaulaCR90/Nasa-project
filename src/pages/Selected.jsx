import React, { useEffect } from "react";
import "./Selected.css";
import { useNavigate } from "react-router-dom";

const Selected = ({ ApiBox }) => {
  const navigate = useNavigate();

  return (
    <>
      <article className="ContentBox">
        <div className="imageDiv">
          <h3>Astronomical image of the day for {ApiBox.date}</h3>
          <img className="image" src={ApiBox.url} alt={ApiBox.title} />
        </div>
        <div className="explanationDiv">
          <h4 className="title-container">{ApiBox.title}</h4>
          <p>{ApiBox.explanation}</p>
          <p className="copyright">
            Copyright: {ApiBox.copyright ? ApiBox.copyright : "Anonymous"}
          </p>
        </div>
      </article>
    </>
  );
};

export default Selected;
