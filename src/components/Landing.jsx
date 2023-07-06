import React, { useState, useEffect } from "react";

const Landing = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (event) => {
    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  const Cursor = () => {
    return (
      <>
        <div
          className="interactive"
          style={{
            transform: `translate(${mouseCoordinates.x}px , ${mouseCoordinates.y}px)`,
          }}
        ></div>
      </>
    );
  };

  return (
    <div className="center">
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <Cursor />
        </div>
      </div>
    </div>
  );
};

export default Landing;
