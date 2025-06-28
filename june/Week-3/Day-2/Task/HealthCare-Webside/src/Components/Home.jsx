import React from 'react';
import './Home.css'

const Home = () => {
  
  return (
    <div className="homepage">
      <header className="header">
        <img src="https://t4.ftcdn.net/jpg/03/06/41/01/360_F_306410112_SIzHIMCxhW0FomeZQsIHmIfTVaxSNp6f.jpg"></img>
        <nav>
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
        <button class="btn">Appointment</button>
      </header>

      <header className="hero">
        <div className="hero-content">
          <h1>Your Health is Our Priority</h1>
          <p>We provide quality care for every patient</p>
          <button>Book Appointment</button>
        </div>
      </header>

      </div>
  );
};


export default Home;
