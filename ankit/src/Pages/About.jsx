import React from "react";
import "./AboutMe.css";
import { ArrowRight , Download} from "lucide-react";
import Ankit from "../Images/ankit.jpg";
import "./button.css";
function AboutMe() {
  return (
    <div className="about-section text-center d-flex flex-column align-items-center justify-content-center">
      <img src={Ankit} alt="Profile" className="profile-img" />
      <h5 className="mt-4 text-uppercase ">About Me</h5>
      <hr className="divider" />
      <h2 className="experience-title mt-3">
        6 Months of experience building the web.
      </h2>
      <p className="description mt-3 mx-3 mx-md-5">
        Hi, I'm Ankit Verma, a passionate Full Stack Developer currently in the
        final semester of my BCA (Bachelor of Computer Applications). I have 6
        months of hands-on experience building real-world web applications using
        the MERN stack (MongoDB, Express.js, React.js, Node.js).
        strong  Branding, web design, UI/UX design and front-end development. For work inquires send me an Email.
      </p>
       <button className="cv-button ">
      <span className="icon-circle-download ">
        <Download size={16} />
      </span>
      Download My CV
    </button>
    </div>
  );
}

export default AboutMe;
