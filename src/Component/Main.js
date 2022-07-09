import React from 'react';
import Plane from './Suncomponent/Plane';
import Hotelsub from './Suncomponent/Hotelsub'
import ShieldCrossLine from './Suncomponent/ShieldCrossLine';
import { IconContext } from "react-icons";


const Main = () => (
  <div>
    <div
      className=" h-screen bg-cover"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/11579902/pexels-photo-11579902.jpeg')`,
      }}
    >
      <div className="grid place-items-center h-full">
        <div className="text-white text-2xl md:text-4xl lg:text-6xl font-black">
          <div className='w-52 sm:w-auto'>
            บริการจองตั๋วเครื่องบินและโรงแรมทั่วโลก
          </div>
            <div className='columns-3 md:mt-20 sm:gap-x-20 grid md:flex justify-center w-max-screen'>
            <IconContext.Provider value={{ color: "white", className: "global-class-name", size:"5rem" }}>
              <div className='border-4 rounded-full p-4 mt-10'><Plane /></div>
              <div className='border-4 rounded-full p-4 mt-10'><Hotelsub/></div>
              <div className='border-4 rounded-full p-4 mt-10'><ShieldCrossLine/></div>
            </IconContext.Provider>
            </div>
        </div>
      </div>
    </div>
  </div>
);

export default Main;
