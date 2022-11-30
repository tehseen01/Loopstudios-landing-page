import React from "react";
import "../SASS/about.scss";
import aboutMobileImg from "../assets/images/mobile/image-interactive.jpg";
import aboutDesktopImg from "../assets/images/desktop/image-interactive.jpg";
const About = () => {
  return (
    <article className="about-container">
      <picture>
        <source media="(min-width: 800px)" srcSet={aboutDesktopImg} />
        <img src={aboutMobileImg} alt="" />
      </picture>
      <div className="text-content">
        <h2 className="heading">The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </article>
  );
};

export default About;
