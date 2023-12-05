import React, { useState } from "react";
import Typed from "react-typed";
// import { render } from "react-dom";
const Hero = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className="text-white">
      <div className="max-w[800px] mt-[-95px] w-full  text-center  h-screen mx-auto flex flex-col justify-center">
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 "
          strings={[
            "So dhawoow",
            "مرحبا",
            "Hola",
            "Bonjour",
            "Hallo",
            "Ciao",
            "你好 ",
            "こんにちは ",
          ]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
        <h1 className="text-p md:text-7xl sm:text-6xl text-4xl font-bold  ">
          I'm Jibriil Guure
        </h1>

        <div>
          <p className=" md:text-4xl sm:text-xl py-4">A Software Engneer</p>
          <button
            onClick={openPopup}
            className="mx-auto bg-p rounded-md  w-[200px] py-4 text-black font-bold"
          >
            Contact
          </button>
        </div>
      </div>
      <div>
        {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>
                &times;
              </span>
              <p>Your popup content goes here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
