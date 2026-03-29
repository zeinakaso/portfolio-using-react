import React, { useState } from "react";
import "./nav.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="nav-container">

      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BsBook />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <VscHistory />
      </a>

      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineMessage />
      </a>

    </nav>
  );
}

export default Nav;