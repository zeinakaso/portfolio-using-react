import React from "react";
import "./about.css";

import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import me from "../../assets/photo/me.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about_container">
        {/* ===== IMAGE ===== */}
        <div className="about-me-image">
          <img src={me} alt="me" />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="about-content">
          <div className="about-cards">

            <div className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2+ years learning & building</small>
            </div>

            <div className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>Personal & academic projects</small>
            </div>

            <div className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>5+ completed projects</small>
            </div>

          </div>

          <p>
            I am an Information Engineering student since 2021, passionate about
            web development. I have learned frontend and backend technologies
            through self-study and built several real-world projects using React
            and Laravel.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;