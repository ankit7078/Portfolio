import React, { useEffect } from 'react';
import './ContactInfoSection.css';

const ContactInfoSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, i * 200);
    });
  }, []);

  return (
    <>
      <div className="container-fluid bg-black text-white py-5 border-secondary">
        <div className="container py-4">
          <div className="row text-center">
            
            <div className="col-md-4 mb-4 fade-up">
              <a href="tel:7078877740" className="text-white text-decoration-none">
                <div className="mb-3 icon-circle">
                  <i className="bi bi-telephone-fill fs-4"></i>
                </div>
                <div className="fw-bold">7078 8777 40</div>
              </a>
            </div>

            <div className="col-md-4 mb-4 fade-up">
              <a href="mailto:av8537742@gmail.com" className="text-white text-decoration-none">
                <div className="mb-3 icon-circle">
                  <i className="bi bi-envelope-fill fs-4"></i>
                </div>
                <div className="fw-bold">av8537742@gmail.com</div>
              </a>
            </div>

            <div className="col-md-4 mb-4 fade-up">
              <div className="mb-3 icon-circle">
                <i className="bi bi-geo-alt-fill fs-4"></i>
              </div>
              <div className="fw-bold">Pathri Bagh, Dehradun</div>
            </div>

          </div>
        </div>
      </div>
      <p className='text-center mb-0 text-white bg-dark py-3'>
        Copyright © All rights reserved.
      </p>
    </>
  );
};

export default ContactInfoSection;
