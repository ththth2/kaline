import React from "react";
import ReactDOM from 'react-dom';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Main2 from './Component/Main2';
import Hotel from './Component/Hotel';
import './index.css';

ReactDOM.render(<>
    <Navbar/>
    <Main/>
    <Main2/>
    {/* <Hotel/> */}
    </>,
document.getElementById('root'));
