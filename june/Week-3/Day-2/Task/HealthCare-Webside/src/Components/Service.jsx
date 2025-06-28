import React from 'react'
import './Service.css'

function Service() {
  return (
    <div>
      <section className="services">
        <h3>Our Services</h3>
        <div className="service-cards">
          <div className="card">
            <h4>General Checkup</h4>
            <p>Routine exams and preventive care for all ages.</p>
          </div>
          <div className="card">
            <h4>Specialist Consult</h4>
            <p>Access to top specialists in every medical field.</p>
          </div>
          <div className="card">
            <h4>Emergency Care</h4>
            <p>24/7 emergency support by trained professionals.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
