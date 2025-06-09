import React from "react";
import "./ServicesSection.css";
import { FaCode, FaDesktop } from "react-icons/fa";
import { BiCrop } from "react-icons/bi";

const services = [
  {
    title: "Web Design",
    description: "Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam.",
    icon: <BiCrop size={48} />,
  },
  {
    title: "Frontend",
    description:
      "Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam.",
    icon: <FaDesktop size={48} />,
  },
  {
    title: "Backend",
    description: "Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam.",
    icon: <FaCode size={48} />,
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h4>SERVICES</h4>
        <div className="divider" />
        <h2>What I Do.</h2>
      </div>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-box">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            {service.description && <p>{service.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
