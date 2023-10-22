import React from "react";
import "../Summery/Summery.css";
import CV from "../../assets/cv/cv.pdf";


const Summery = () => {
  return (
    <section id="summery">
    <div className="summery-heading">
      <strong>My Skillset</strong>

      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

<a href={CV} download className="btn-link">
Get CV <i className="fa-solid fa-download"></i>
</a>
</div>
<div className="summery-details">
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium iusto quae esse odio quisquam! Odio aspernatur delectus voluptatem suscipit doloribus eaque velit reprehenderit fuga voluptas illo beatae, corrupti maxime quibusdam.
  </p>


</div>

</section>
  )
}

export default Summery