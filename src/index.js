import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Component/Navbar';
import reportWebVitals from './reportWebVitals';
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Main/>
    <Main2/>
    <Hotel/>
    <Service/>
    <Travel/>
    <Partner/>
    <New/>
    <Promotion/>
    <About/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
