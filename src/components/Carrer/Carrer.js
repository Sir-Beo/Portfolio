import React from "react";
import "./Carrer.css";
import CV from "../../assets/cv/cv.pdf";

const Carrer = () => {
  const carrers =[
    {
      title: "Front-end Developer",
      name: "Software",
      year: "2018 - 2020"
    },
    {
      title: "Back-end Developer",
      name: "Software",
      year: "2018 - 2020"
    },
  ]
  const educations =[
    {
      title: "Front-end Developer",
      name: "Software",
      year: "2018 - 2020"
    },
    {
      title: "Back-end Developer",
      name: "Software",
      year: "2018 - 2020"
    },
  ]
  return (
  <section id="carrer">
    <div className="carrer-education">
      <div className="carrer">
        <h3>Carrer</h3>

        <div className="c-b-container">
          {
            carrers.map((carrer, index) => (
<div className="c-box" key={index}>
  <h4>{carrer.title}</h4>
  <strong>{carrer.name}</strong>
  <span>{carrer.year}</span>
</div>
            ))
          }
        </div>
      </div>

      <div className="carrer edu">
        <h3>Education</h3>

<div className="c-b-container">
  {
    educations.map((carrer, index) => (
      <div className="c-box" key={index}>
        <h4>{carrer.title}</h4>
        <strong>{carrer.name}</strong>
        <span>{carrer.year}</span>
      </div>
    ))
  }
</div>


      </div>   
    </div>

    <div className="btn-c">
        <a href={CV} downLoad className="btn-link">
          Get CV <i cclassName="fa-solid fa-download"></i>
        </a>
      </div>

  </section>
  )
}

export default Carrer