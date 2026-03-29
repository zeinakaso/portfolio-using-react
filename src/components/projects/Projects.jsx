import React from "react";
import "./projects.css";

import blogImg from "../../assets/photo/artical.jpg";
import shopImg from "../../assets/photo/sport.png";
import weatherImg from "../../assets/photo/weather.png";
import todoImg from "../../assets/photo/todo.png";
import healthImg from "../../assets/photo/care.png";

const projects = [
  {
    title: "Blog Management System (Laravel)",
    desc: "Fullstack web application built using Laravel with authentication and CRUD operations.",
    img: blogImg,
    github: "https://github.com/zeinakaso/Artical--project.git",
    demo: "#",
    tags: ["Laravel", "PHP", "MySQL"],
    featured: true,
  },
  {
    title: "Sports Wear Store (Frontend)",
    desc: "Modern responsive e-commerce UI built using HTML, CSS and JavaScript.",
    img: shopImg,
    github: "#",
    demo: "#",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather App (React + API)",
    desc: "React application that fetches real-time weather data using external API.",
    img: weatherImg,
    github: "#",
    demo: "https://idyllic-macaron-568561.netlify.app/",
    tags: ["React", "API"],
  },
  {
    title: "Todo List App (React)",
    desc: "Task management app using React with dynamic state handling.",
    img: todoImg,
    github: "https://github.com/zeinakaso/todo.git",
    demo: "https://zesty-faloodeh-734905.netlify.app",
    tags: ["React"],
  },
  {
    title: "Healthcare Dashboard UI (React)",
    desc: "Clean and modern healthcare UI built with reusable React components.",
    img: healthImg,
    github: "https://github.com/zeinakaso/care-track.git",
    demo: "#",
    tags: ["React", "UI"],
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>

      <div className="container projects-container">
        {projects.map((project, index) => (
          <article className="portfolio-item" key={index}>
            {/* IMAGE */}
            <div className="portfolio-item-img">
              <img src={project.img} alt={project.title} />

              {/* OVERLAY */}
              <div className="overlay">
                <a href={project.github} target="_blank" rel="noreferrer">
                  Github
                </a>

                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <h3>{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;