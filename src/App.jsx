import { BrowserRouter, Route, Routes } from "react-router-dom"
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, SideBar, CV} from "./components"

const App = () => {

  return (
<BrowserRouter>

<div className="relative z-0 bg-primary">
    <SideBar />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Works />
      <Experience />
      <Tech />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>

</BrowserRouter>
  )
}

export default App
