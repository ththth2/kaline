import { FaThumbsUp } from "react-icons/fa";
import Question from "./Suncomponent/question";
import Btmes from "./Suncomponent/bt-messenger";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 2000,
});

const Hotel = () => (
  <div>
    <div className="mx-8 mt-10 h-auto w-auto grid sm:flex ">
      <div className="grid sm:flex w-full">
        <div className="content-center h-auto w-full mb-4 text-3xl md:text-5xl font-black text-gray-600">
          เที่ยวหรู อยู่สบาย
        </div>
        <div className="grid sm:flex justify-center ms:justify-end gap-6">
          <Question />
          <Btmes />
        </div>
      </div>
    </div>
    <div className="mt-10 mx-8 h-auto w-auto">
      <div className="columns-1 md:columns-3 h-auto w-full">
        <div
          data-aos="fade-up"
          className="flex justify-end mt-4 md:mt-0 w-full"
        >
          <div className="w-full">
            <div className="flex justify-center w-full xl:w-auto">
              <div className="flex justify-center w-full smx:w-4/6 md:w-full">
                <img
                  className=" xl:h-96 lg:h-72 md:h-48 h-60 w-full rounded-[25px] "
                  src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-10 columns-2 flex h-auto">
              <div className="w-3/4 h-full ">
                <div className="text-4xl font-bold uppercase">kabi kotel</div>
                <div className="text-xl mt-6">2,200 Baht / Night</div>
              </div>
              <div className="text-5xl w-1/4 flex justify-end">
                <FaThumbsUp />
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex justify-end mt-4 md:mt-0 w-full"
        >
          <div className="w-full">
            <div className="flex justify-center w-full xl:w-auto">
              <div className="flex justify-center w-full smx:w-4/6 md:w-full">
                <img
                  className=" xl:h-96 lg:h-72 md:h-48 h-60 w-full rounded-[25px] "
                  src="https://assets.brandinside.asia/uploads/2021/03/shutterstock_756956185-scaled.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-10 columns-2 flex h-auto">
              <div className="w-3/4 h-full ">
                <div className="text-4xl font-bold uppercase">
                  maldives hotel
                </div>
                <div className="text-xl mt-6">5,200 Baht / Night</div>
              </div>
              <div className="text-5xl w-1/4 flex justify-end">
                <FaThumbsUp />
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex justify-end mt-4 md:mt-0 w-full"
        >
          <div className="w-full">
            <div className="flex justify-center w-full xl:w-auto">
              <div className="flex justify-center w-full smx:w-4/6 md:w-full">
                <img
                  className=" xl:h-96 lg:h-72 md:h-48 h-60 w-full rounded-[25px] "
                  src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-10 columns-2 flex h-auto">
              <div className="w-3/4 w-full h-full ">
                <div className="text-4xl font-bold uppercase">
                  kho yai hotel
                </div>
                <div className="text-xl mt-6">3,200 Baht / Night</div>
              </div>
              <div className="text-5xl w-1/4 flex justify-end">
                <FaThumbsUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Hotel;
