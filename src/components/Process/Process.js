import React from "react";
import "./Process.css";

const Process = () => {
 const data =[
  {id: "01",
title: "Pre-Process",
contents: ["Coolect Informations", "Personas", "Setup Goals", "Project Folder + Moodboard"]
},
{id: "02",
title: "Pre-Process",
contents: ["Coolect Informations", "Personas", "Setup Goals", "Project Folder + Moodboard"]
},
{id: "03",
title: "Pre-Process",
contents: ["Coolect Informations", "Personas", "Setup Goals", "Project Folder + Moodboard"]
},
{id: "04",
title: "Pre-Process",
contents: ["Coolect Informations", "Personas", "Setup Goals", "Project Folder + Moodboard"]
},
{id: "05",
title: "Pre-Process",
contents: ["Coolect Informations", "Personas", "Setup Goals", "Project Folder + Moodboard"]
},
{id: "06",
title: "Pre-Process",
contents: ["Coolect Informations", "Personas", "Setup Goals", "Project Folder + Moodboard"]
}
 ] 
 
 return (
 <section id="process" data-aos="fade">
  <div className="process-heading">
    <h3>Process</h3>
  </div>

  <div className="process-container">
    {
      data.map(process =>(
        <div className="process-box" key={process.id}>
          <span>{process.id}</span>
          <strong>{process.title}</strong>
          <ul>
            {
              process.contents.map(content => (
                <li key={content}>{content}</li>
              ))
            }
          </ul>
        </div>
      ))
    }
  </div>
  </section>
  )
}

export default Process