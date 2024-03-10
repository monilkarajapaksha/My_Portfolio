import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience,Feedbacks, Hero, Navbar, Tech,StarsCanvas, Works} from './components';

const  App=()=>{

  return (
    <BrowserRouter>
       <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Feedbacks/>
        <Experience/>
        <Tech/>
        <Works/>
        
       </div>
       <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
       </div>
    </BrowserRouter>
  )
}

export default App
