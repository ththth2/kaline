import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.min.css';

const Main2 = () => (
  <div>
    <div className="mx-8">
      <div
        className=" h-96 bg-cover bg-center mt-6 rounded-lg"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg')`,
        }}
      >
        <div className="grid place-items-center flex justify-start sm:ml-20 h-full">
          <div className="grid place-items-center">
            <div className="sm:text-4xl text-3xl font-bold font-IBMTH sm:w-auto w-2/5">สะดวก สะบาย ทุกทริป</div>
            <div className="text-white sm:text-8xl text-4xl mt-2 font-Dancing tracking-wide"> Holiday</div>
            <div className='w-auto mt-3/4'><Button shape='round' block style={{
          height: 60,
        }}>
              <div className='text-sky-700 sm:text-3xl text-xl font-bold md:px-12 px-0'>โปรโมชั้นประจำเดือน</div></Button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Main2;
