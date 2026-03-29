import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";

import "./home.css";
function HomeSocials() {
  return (
    <div className="home-socials">
      <a
        href="https://www.linkedin.com/in/zeina-kaso-797625284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/zeinakaso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a href="#" target="_blank">
        <FaDribbble />
      </a>
    </div>
  );
}

export default HomeSocials;
