import React from "react";
import "./Home.css";
import Avatar from "../../assets/images/avatar.jpg";
const Home = () => {
  return (
    <section id="home">
    <div className="home-text" data-aos="fade-down">
      <strong>Hello, it's me</strong>
      <h1>Sir Beo</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis quos, quo eveniet explicabo consequatur sunt, optio rem ad fugit inventore? Corporis obcaecati quis unde repudiandae ab quam excepturi commodi.</p>
      <a href="#summery" className="btn-link">Scroll For Me</a>
    </div>

    <div className="home-img" data-aos="fade-up">
      <div className="img-box">
        <img src={Avatar} alt="Avatar" />

      <h2>Sir Beo <br /><span>Full-Stack Devoloper</span></h2>

        <div className="social">
          <a href="#!">
          <i className="fa-brands fa-facebook"></i>
          </a>
          
          <a href="#!"> {/* verweist auf die aktuelle Seite und verhindert ein neuladen!!*/}
          <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

        <a href="#!" className="hire-me">Hire me</a>
      </div>
    </div>
    </section>
  )
}

export default Home