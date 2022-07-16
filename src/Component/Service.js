import Plane from "./Suncomponent/Plane";
import Hotelsub from "./Suncomponent/Hotelsub";
import ShieldCrossLine from "./Suncomponent/ShieldCrossLine";
import Passport from "./Suncomponent/Passport";
import { IconContext } from "react-icons";

const Service = () => (
  <div>
    <div className="mt-10 mx-8 h-auto">
      <div className=" content-center h-auto">
        <div className="text-5xl font-black text-gray-600 mb-10">
          บริการของเรา
        </div>
      </div>
      <div className="columns-4 h-auto  grid sm:flex justify-center">
        <IconContext.Provider
          value={{
            color: "#8c8c8c",
            className: "global-class-name",
            size: "7rem",
          }}
        >
          <div data-aos="fade-up" className="w-full flex justify-center">
            <div className="w-1/4 flex justify-center grid">
              <div className="w-fit h-fit border-4 rounded-full border-gray-400 p-8">
                <Plane />
              </div>
              <div className=" mt-6">
                <div className="flex justify-center text-2xl font-bold">
                  ตั๋วเครื่องบิน
                </div>
                <div className="flex justify-center text-xl font-bold mt-2">
                  ( Air ticket )
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="w-full flex justify-center">
            <div className="w-1/4 flex justify-center grid">
              <div className="w-fit h-fit border-4 rounded-full border-gray-400 p-8">
                <Hotelsub />
              </div>
              <div className="grid flex justify-center mt-6">
                <div className="text-2xl font-bold">ที่พักโรงแรม</div>
                <div className="flex justify-center text-xl font-bold mt-2">
                  ( Hotel )
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="w-full flex justify-center">
            <div className="w-1/4 flex justify-center grid">
              <div className="w-fit h-fit border-4 rounded-full border-gray-400 p-8">
                <ShieldCrossLine />
              </div>
              <div className="grid flex justify-center mt-6">
                <div className="text-2xl font-bold">ประกันภัย</div>
                <div className="flex justify-center text-xl font-bold mt-2">
                  ( Insurance )
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="w-full flex justify-center">
            <div className="w-1/4 flex justify-center grid">
              <div className="w-fit h-fit border-4 rounded-full border-gray-400 p-8">
                <Passport />
              </div>
              <div className="grid flex justify-center mt-6">
                <div className="text-2xl font-bold">บริการวีซ่า</div>
                <div className="flex justify-center text-xl font-bold mt-2">
                  ( Visa service )
                </div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  </div>
);

export default Service;
