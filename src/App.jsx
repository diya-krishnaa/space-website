import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import BgVideo from "./assets/earth-bg.mp4";
import wave from "./assets/wave.jpg";
import Rapidscat from "./components/Rapidscat.jsx";
import Satelite from "./components/Satelite.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Topbar from "./components/Topbar.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []); // Added dependency array to prevent multiple calls

  return (
    <div>
      <div className="h-[700px] relative">
        <video autoPlay loop muted className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]">
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Topbar />
        <Hero />
      </div>
      <Services />

      <Routes>
        <Route path="/rapidscat" element={<Rapidscat />} />
        {/* You can define more routes here */}
      </Routes>

      <Satelite />
      <Footer />
    </div>
  );
};

export default App;
