import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectsSection.css';
// import Adikailash from "../Images/adikailash.jpg"
// import Charterflight from "../Images/Charterflight.jpg"
// import Chardham from "../Images/chardham.jpg"
// import Poshak from "../Images/rajputiposhak.jpg"
const projects = [
  {
    id: 1,
    category: 'WEB DEVELOPER',
    title: 'Chardham Yatra Website',
    imageUrl:"https://www.shrineyatra.in/wp-content/uploads/2024/05/chardham-yatra-package.webp" ,
    link: 'https://chardham.uk/'
  },
  {
    id: 2,
    category: 'WEB DEVELOPER',
    title: 'UK Tourism Website',
    imageUrl: 'https://media.istockphoto.com/id/648477278/photo/big-ben-in-london.jpg?s=612x612&w=0&k=20&c=NrOxCJBaq8gIq0BMdtCa74ynPRs3HvKMXPKk0cM4S3M=',
    link: 'https://uktourism.chardham.uk/'
  },
  {
    id: 5,
    category: 'WEB DEVELOPER',
    title: 'Rajputi Poshak',
    imageUrl: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
    link: 'https://theroyalrajputiposhak.com/'
  },
  {
    id: 3,
    category: 'WEB DEVELOPER',
    title: 'Adi Kailash',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUP2J7Folw6YTURiU9gbiIUutB7ua2GafWpA&s',
    link: 'https://adikailash.chardham.uk/'
  },
  {
    id: 4,
    category: 'WEB DEVELOPER',
    title: 'Charter Flight',
    imageUrl: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
    link: 'https://charterflight.services/'
  },
  // Add more projects as needed
];

const categories = ['ALL', 'WEB DESIGN', 'UI/UX', 'WEB DEVELOPER'];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('ALL');
  const filteredProjects =
    filter === 'ALL' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="projects-section py-5 ">
      <div className="container">
        <h2 className="text-center fs-5 fw-bold mb-5">My Portfolio</h2>

        <div className="text-center mb-4">
          {categories.map(category => (
            <button
              key={category}
              className={`btn mx-2 mb-2 ${
                filter === category ? 'btn-primary' : 'btn-outline-light'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredProjects.map(project => (
            <div key={project.id} className="col-md-6 col-lg-4 mb-4">
              <div className="project-card shadow-sm">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
                <div className="overlay text-white text-center px-3">
                  <h5 className="fw-bold">{project.title}</h5>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm mt-2"
                  >
                    
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
