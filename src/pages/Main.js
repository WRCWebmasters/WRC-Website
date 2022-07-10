import React, { useState, useEffect } from "react";

import Slider from "react-slick";

import paintball from "../resources/images/carousel/carousel1.jpg";
import beerbikebw from "../resources/images/carousel/carousel3.jpg";
import wrws from "../resources/images/carousel/wrws-seniors-2021.jpeg";

export default function Main() {
  const carouselCustomizations = {
    // dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider",
  };

  return (
    <>
      <div className="body">
        <div className="carousel">
          <Slider {...carouselCustomizations}>
            <img src={paintball} alt="paintball (i don't know what this is)" />
            <img src={beerbikebw} alt="beer bike team in black and white" />
            <img
              src={wrws}
              alt="class of 2022 poses in front of the christmas tree at will rice will skate"
            />
          </Slider>
          <div
            style={{
              borderTop: `100vh solid white`,
              borderRight: `20vw solid transparent`,
              transform: `translateX(-10%)`,
              top: 0,
              left: 0,
            }}
            className="overlay"
          />
          <div
            style={{
              borderBottom: `100vh solid white`,
              borderLeft: `20vw solid transparent`,
              transform: `translateX(10%)`,
              left: `80vw`,
              bottom: 0,
            }}
            className="overlay"
          />
        </div>

        <div
          className="title"
          style={{
            transform: `translateY(-50%) translateX(10%)`,

            position: "absolute",
          }}
        >
          <h6 style={{ color: "white" }}>Welcome to</h6>
          <h5 style={{ color: "white", fontWeight: "bold" }}>
            Will Rice College
          </h5>
        </div>
        <div style={{ height: "300px" }} className="quick-links">
          <p>Quick Links</p>
        </div>
      </div>
    </>
  );
}
