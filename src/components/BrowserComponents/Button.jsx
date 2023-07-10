import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GetAPODPhotos from '../GetAPODPhotos'

const Button = ({ selectValue, date, setApiBox }) => {

  const navigate = useNavigate();
  
  const handleSubmit = () => {
    console.log(selectValue);
    if (selectValue === "mars") {
      <GetMarsPhotos date={date} />;
      navigate('/mars')
    } else {
      <GetAPODPhotos date={date} setApiBox={setApiBox} />;
      navigate('/apod')
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
