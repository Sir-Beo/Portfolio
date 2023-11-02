import React from "react";
import "./About.css";


const About = () => {
  return (
  <section id="about">
    <div className="about-container">
      <div className="about-heading" data-aos="flip-left">
        <strong>About me</strong>
        <h3>Design with passion for Problem Solving</h3>
        <a href="tel: 01234567890" className="btn-link">
          0123-456-7890 <i className="fa-solid fa-phone-flip"></i>
        </a>
      </div>

      <div className="about-details" data-aos="flip-right">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus impedit, possimus adipisci, voluptatibus quod explicabo sunt tempora natus esse perspiciatis dolores libero laborum itaque. Velit nostrum ullam magnam asperiores.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus impedit, possimus adipisci, voluptatibus quod explicabo sunt tempora natus esse perspiciatis dolores libero laborum itaque. Velit nostrum ullam magnam asperiores.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus impedit, possimus adipisci, voluptatibus quod explicabo sunt tempora natus esse perspiciatis dolores libero laborum itaque. Velit nostrum ullam magnam asperiores.</p>
      </div>
    </div>

  </section>
  )
}


export default About