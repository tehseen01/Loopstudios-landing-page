import React from "react";
import desktopHero from "../assets/images/desktop/image-hero.jpg";
import mobileHero from "../assets/images/mobile/image-hero.jpg";
import "../SASS/home.scss";
import Navbar from "./navbar";

const home = () => {
  return (
    <>
      <main>
        <Navbar />
        <picture>
          <source media="(min-width: 800px)" srcSet={desktopHero} />
          <img src={mobileHero} alt="" />
        </picture>
        <h1>Immersive experiences that deliver</h1>
      </main>
    </>
  );
};

export default home;
