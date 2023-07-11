import React from "react";
import "./SlideShow.css";

const SlideShow = ({ MarsBox }) => {
  return (
    <div className="slide-container">
      {MarsBox.photos.map((photo) => (
        <div className="each-slide" key={photo.id}>
          <img className="rover-img" src={photo.img_src} alt={photo.id} />
          <span className="rover-span">{photo.camera.full_name}</span>
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
