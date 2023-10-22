import React from "react";
import Home from "./components/Home/Home";
import Languages from "./components/Languages/Languages";
import Navigation from "./components/Navigation/Navigation";
import Process from "./components/Process/Process";
import Summery from "./components/Summery/Summery";
import Projects from "./components/Projects/Projects";
import Carrer from "./components/Carrer/Carrer";


const App = () => {
  return (
   <><div className="container">
   <Navigation />
   <Home />
   <Summery />
   <Languages />
   <Process />
   <Projects />
   <Carrer/>
   </div>
   </>
  )
}

export default App