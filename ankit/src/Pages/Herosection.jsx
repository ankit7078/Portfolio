import React, { useState } from "react";
import "../HeroSection.css";
import AboutMe from "./About";
import Skill from "./Skill";
import ServicesSection from "./Servicesection";
import Resume from "./Resume";
import Project from "./Projects";
import Contact from "./Contact";
import { ArrowRight } from "lucide-react";

const MarketeerHero = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="marketeer-hero">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          {/* <button className="close-btn" onClick={toggleSidebar}>×</button> */}
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="left-content animate-left">
          {/* Social Icons */}
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-behance"></i>
            </a>
            <a href="#">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>

          {/* Hero Text */}
          <div className="hero-text animate-fade-in-up">
            <h1 className="hero-title">
              I'AM <span className="italic">Ankit Verma</span>
            </h1>
            <hr
              style={{
                width: "8%",
                marginLeft: "2px",
                margin: "1rem 0rem 0rem",
                border: "1px solid rgb(86 86 86)",
              }}
            />

            <p className="hero-subtitle">Web Developer And Designer</p>
       <a
      href="#portfolio"
      className="btn custom-hover d-flex align-items-center gap-2 px-4 py-2 border border-2 rounded-5 text-white bg-black w-50 text-decoration-none"
    >
      View My Portfolio
      <ArrowRight size={20} />
    </a>
          </div>
        </div>

        {/* Learn More */}
        <div className="learn-more-text animate-fade"><a href="#about" className="text-decoration-none text-white">
          LEARN MORE <span>→</span></a>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu animate-fade" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <section id="about">
      <AboutMe className="sticky-nav"  />
      </section>
      <section id="skills" className="pb-5 bg-black">
      <Skill /></section>
      <section id="service">
      <ServicesSection />
      </section>
      <section id="resume">
      <Resume /></section>
      <section id="portfolio">
      <Project  />
 </section>     <Contact />
    </>
  );
};

export default MarketeerHero;
