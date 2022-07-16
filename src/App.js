import "./index.css";
import React from "react";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";
import Main2 from "./Component/Main2";
import Hotel from "./Component/Hotel";
import Service from "./Component/Service";
import Travel from "./Component/Travel";
import Partner from "./Component/Partner";
import New from "./Component/New";
import Promotion from "./Component/Promotion";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Map from "./Component/Map"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./Component/scrollToTop";

AOS.init({
  duration: 2000,
});

function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route
          
            path="/"
            element={
              <>
                <Main />
                <Main2 />
                <Hotel />
                <Service />
                <Travel />
                <Partner />
                <New />
                <Promotion />
                <About />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <Main />
                <Map/>
                <About />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
