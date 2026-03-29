import React from "react";
import "./experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="top_section">
        <h5>My Journey</h5>
        <h2>Experience & Education</h2>
      </div>

      <div className="container experience-container">

        {/* ===== EXPERIENCE ===== */}
        <div className="experience-box">
          <h3>Experience</h3>

          <div className="timeline">

            <div className="timeline-item">
              <span>2024 - Present</span>
              <h4>Frontend Developer (Personal Projects)</h4>
              <p>
                Building modern and responsive web applications using React, focusing on clean UI, performance, and user experience.
              </p>
            </div>

            <div className="timeline-item">
              <span>2024 - Present</span>
              <h4>Laravel Backend Development</h4>
              <p>
                Developing backend systems using Laravel, including authentication, database design, and REST APIs integration.
              </p>
            </div>

            <div className="timeline-item">
              <span>2023 - Present</span>
              <h4>Self-Learning & Practice</h4>
              <p>
                Continuously learning web development through online courses and building real-world projects independently.
              </p>
            </div>

          </div>
        </div>

        {/* ===== EDUCATION ===== */}
        <div className="experience-box">
          <h3>Education</h3>

          <div className="timeline">

            <div className="timeline-item">
              <span>2021 - Present</span>
              <h4>Information Engineering Student</h4>
              <p>
                Studying software engineering, databases, and system design at university.
              </p>
            </div>

            <div className="timeline-item">
              <span>2022 - Present</span>
              <h4>Self-Learning Courses</h4>
              <p>
                Completed multiple courses in Frontend (React, JavaScript) and Backend (Laravel, APIs), building strong practical skills.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;