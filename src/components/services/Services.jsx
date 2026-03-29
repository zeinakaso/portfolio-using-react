import React from 'react'
import './services.css'
import { FaPaintBrush, FaBolt, FaCode } from "react-icons/fa";
import {IoIosRocket} from "react-icons/io";

function Services() {
  return (
    <section className="services" id='services'>
      
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>

      <div className="container services-container">

        {/* Web Design */}
        <article className="service-card">
          <div className="service-icon">
            <FaPaintBrush />
          </div>
          <h3>Web Design</h3>
          <p className="text-light">
            Modern and responsive UI design with clean layouts and great user experience.
          </p>
        </article>

        {/* Fast Performance */}
        <article className="service-card">
          <div className="service-icon">
            {/* <FaBolt /> */}
            <IoIosRocket/>
          </div>
          <h3>Fast Performance</h3>
          <p className="text-light">
            Optimized websites with fast loading speed and smooth interactions.
          </p>
        </article>

        {/* Clean Code */}
        <article className="service-card">
          <div className="service-icon">
            <FaCode />
          </div>
          <h3>Clean Code</h3>
          <p className="text-light">
            Writing scalable, maintainable, and clean code following best practices.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Services