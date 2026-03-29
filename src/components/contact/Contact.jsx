import React, { useRef } from "react";
import "./contact.css";

import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fcnb998",
      "template_8ng0b6n",
      form.current,
      "Pdcde4Urylg21eFK1"
    )
    .then(() => {
      alert("Message sent successfully ✅");
    })
    .catch((error) => {
      alert("Failed to send ❌");
      console.log(error);
    });

    e.target.reset();
  };

  return (
    <section className="contact" id="contact">

      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact-container">

        {/* ===== LEFT SIDE ===== */}
        <div className="contact-options">

          <article className="contact-card">
            <MdEmail className="contact-icon" />
            <h4>Email</h4>
            <h5>zeinakaso34@gmail.com</h5>
            <a href="mailto:zleaitnhakas0@gmail.com" target="_blank">Send Message</a>
          </article>

          <article className="contact-card">
            <FaFacebookMessenger className="contact-icon" />
            <h4>Messenger</h4>
            <h5>Zeina Kaso</h5>
            <a href="https://m.me/" target="_blank">Send Message</a>
          </article>

          <article className="contact-card">
            <FaWhatsapp className="contact-icon" />
            <h4>WhatsApp</h4>
            <h5>+693981271292</h5>
            <a href="https://api.whatsapp.com/send?phone=693981271292" target="_blank">Send Message</a>
          </article>

        </div>

        {/* ===== FORM ===== */}
        <form ref={form} onSubmit={sendEmail}>

          <input 
            type="text" 
            name="name"
            placeholder="Full Name" 
            required 
          />

          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            required 
          />

          <textarea 
            name="message"
            rows="10" 
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;