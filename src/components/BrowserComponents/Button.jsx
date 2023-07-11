import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ selectValue, date, setApiBox, setMarsBox }) => {
  const ApodLink = `${
    import.meta.env.VITE_APP_NASA_API_URL
  }/planetary/apod?date=${date}&api_key=${
    import.meta.env.VITE_APP_NASA_API_KEY
  }`;
  const MarsLink = `${
    import.meta.env.VITE_APP_NASA_API_URL
  }/mars-photos/api/v1/rovers/curiosity/photos?100&api_key=${
    import.meta.env.VITE_APP_NASA_API_KEY
  }&earth_date=${date}`;

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
