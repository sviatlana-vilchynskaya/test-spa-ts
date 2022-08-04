import React from "react";
import "./styles/index.css";

function Slider() {
  return (
    <div className="slider-container">
      <div className="slider-wrap">
        <div id="slide1" className="slider-item">
          <img src="https://placeimg.com/800/200/arch" className="slider-img" />
          <div className="btn-control-wrap">
            <a href="#slide4" className="btn-control">
              ❮
            </a>
            <a href="#slide2" className="btn-control">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="slider-item">
          <img src="https://placeimg.com/800/200/arch" className="slider-img" />
          <div className="btn-control-wrap">
            <a href="#slide1" className="btn-control">
              ❮
            </a>
            <a href="#slide3" className="btn-control">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="slider-item">
          <img src="https://placeimg.com/800/200/arch" className="slider-img" />
          <div className="btn-control-wrap">
            <a href="#slide2" className="btn-control">
              ❮
            </a>
            <a href="#slide4" className="btn-control">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="slider-item">
          <img src="https://placeimg.com/800/200/arch" className="slider-img" />
          <div className="btn-control-wrap">
            <a href="#slide3" className="btn-control">
              ❮
            </a>
            <a href="#slide1" className="btn-control">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slider;
