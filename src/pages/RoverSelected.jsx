import React from "react";
import "./RoverSelected.css";
import SlideShow from "../components/SlideShow";
import { Navigate } from "react-router-dom";

const RoverSelected = ({ date, MarsBox }) => {
  if (!MarsBox.length) {
    <Navigate to="/404" />;
  }
  return (
    <>
      <article className="rover-section">
        <h4>
          This photos are sent from the Rover 'Curiosity' and selected by NASA
          for {date}
        </h4>
        <SlideShow MarsBox={MarsBox} />
      </article>
    </>
  );
};

export default RoverSelected;
