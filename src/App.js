import './index.css';
import React from "react";
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Main2 from './Component/Main2';
import Hotel from './Component/Hotel';
import Service from './Component/Service';
import Travel from './Component/Travel';
import Partner from './Component/Partner';
import New from './Component/New';
import Promotion from './Component/Promotion';
import About from './Component/About';
import Footer from './Component/Footer';
import { } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
    <Main/>
    <Main2/>
    <Hotel/>
    <Service/>
    <Travel/>
    <Partner/>
    <New />
    <Promotion/>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
