import React from "react";
import './Banner.css'; 

export default function Banner() {
  return (
    <React.Fragment>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              id="banner"
              src="../assets/banner.jpg"
              className="d-block w-100 height:360px shadow p-3"
              alt="banner"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
