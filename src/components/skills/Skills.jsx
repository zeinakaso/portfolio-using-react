import React from "react";
import "./skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiBootstrap, SiLaravel, SiPhp, SiMysql, SiPostman } from "react-icons/si";

import { BsCodeSlash } from "react-icons/bs";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container skills-container">

        {/* ===== FRONTEND ===== */}
        <div className="skills-box">
          <h3>Frontend</h3>

          <div className="skills-content">
            <article><FaHtml5 /> <h4>HTML</h4></article>
            <article><FaCss3Alt /> <h4>CSS</h4></article>
            <article><FaJs /> <h4>JavaScript</h4></article>
            <article><FaReact /> <h4>React</h4></article>
            <article><SiTailwindcss /> <h4>Tailwind</h4></article>
            <article><SiBootstrap /> <h4>Bootstrap</h4></article>
          </div>
        </div>

        {/* ===== BACKEND ===== */}
        <div className="skills-box">
          <h3>Backend</h3>

          <div className="skills-content">
            <article><SiLaravel /> <h4>Laravel</h4></article>
            <article><SiPhp /> <h4>PHP</h4></article>
            <article><SiMysql /> <h4>MySQL</h4></article>
          </div>
        </div>

        {/* ===== API ===== */}
        <div className="skills-box">
          <h3>API & Integration</h3>

          <div className="skills-content">
            <article><BsCodeSlash /> <h4>REST API</h4></article>
            <article><BsCodeSlash /> <h4>Axios</h4></article>
            <article><BsCodeSlash /> <h4>JSON</h4></article>
          </div>
        </div>

        {/* ===== TOOLS ===== */}
        <div className="skills-box">
          <h3>Tools</h3>

          <div className="skills-content">
            <article><FaGitAlt /> <h4>Git</h4></article>
            <article><FaGithub /> <h4>GitHub</h4></article>
            <article><SiPostman /> <h4>Postman</h4></article>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;