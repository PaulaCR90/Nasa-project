import React from "react";
import "./Selected.css";

const Selected = ({ ApiBox }) => {
  return (
    <>
      {ApiBox.length === 0 ? (
        <NotFound />
      ) : (
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
      )}
    </>
  );
};

export default Selected;
