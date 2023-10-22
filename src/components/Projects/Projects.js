import React from "react";
import "./Projects.css";

import Ecom from "../../assets/images/e-commerce.png"
import Bulls_Cows from "../../assets/images/Bulls_Cows.jpeg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Projects = () => {
  const data = [
    {
      src: Ecom,
      url: "#!"
    },

    {
      src: Bulls_Cows,
      url: "https://github.com/Sir-Beo/Bulls-Cows"
    },

    {
      src: Ecom,
      url: "#!"
    },

    {
      src: Ecom,
      url: "#!"
    }
  ]
  
  
  return (
    <section id="projects">
    <div className="project-heading">
      <h3>Recent Projects</h3>
    </div>

    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
          data.map(project => (
            <SwiperSlide key={project.src}>
                  <div className="project-box">
                  <a href={project.url}>{/* Hier wurden die geschweiften Klammern entfernt */}
            <img src={project.src} alt="project" />
<div className="p-overLayer">
  <strong>Outserved Reports</strong>
</div>
          </a>
        </div>
              </SwiperSlide>
          ))
        }
    
        
      </Swiper>

<div className="github-btn">
  <a href="https://github.com/Sir-Beo" className="btn-link">
    My Github <i className="fa-brands fa-github"></i>"
  </a>
</div>
    </section>
  )
}

export default Projects
