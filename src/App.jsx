import { BrowserRouter } from "react-router-dom";

import { About, Certifications, Contact, Footer, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='px-4 sm:px-6 lg:px-8'>
          <About />
          <Tech />
          <Works />
          <Certifications />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
