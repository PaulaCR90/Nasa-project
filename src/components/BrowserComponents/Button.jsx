import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ selectValue, date, setApiBox, setMarsBox }) => {
  const NasaLink = "https://api.nasa.gov";
  const ApiKey = "cjiy3r3KfYvHXY1IzAjabSytpsoiSai2EyW4dsMk";
  const ApodLink = `${NasaLink}/planetary/apod?date=${date}&api_key=${ApiKey}`;
  const MarsLink = `${NasaLink}/mars-photos/api/v1/rovers/curiosity/photos?100&api_key=${ApiKey}&earth_date=${date}`;

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectValue === "mars") {
      fetch(MarsLink)
        .then((res) => res.json())
        .then((res) => setMarsBox(res));
      navigate("/mars");
    } else if (selectValue === "apod") {
      fetch(ApodLink)
        .then((res) => res.json())
        .then((res) => setApiBox(res));
      navigate("/apod");
    } else {
      navigate("/404");
    }
  };

  return (
    <>
      <button type="submit" onClick={handleSubmit}>
        Start! 🛸
      </button>
    </>
  );
};

export default Button;
