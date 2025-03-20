import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Home, Navbar, Projects, Skills } from "./components";


const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar/>
        <div className="wrapper" ref={wrapperRef}>
          <div id="home" className="z-10">
            <Home scrollContainer={wrapperRef} />
          </div>
          <div id="about" className='relative z-30 bg-primary mt-[-2px]'>
            <About />
          </div>
          <div id="skills" className='relative z-30 bg-primary'>
            <Skills />
          </div>
          <div id="projects" className='relative z-30 bg-primary'>
            <Projects />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
            <Contact/>
          </div>
          
        </div>

      </div>

    </BrowserRouter>
  );
};

export default App;