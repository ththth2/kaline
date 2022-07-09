import Btmes from "./Suncomponent/bt-messenger";
import Question from "./Suncomponent/question";

const Promotion = () => (
  <div>
    <div className="mx-8 mt-20 h-auto w-auto flex">

    <div className="grid sm:flex w-full">
        <div className="content-center h-auto w-full mb-4 text-3xl md:text-5xl font-black text-gray-600">
        โปรโมชั่น
      </div>
        <div className="grid sm:flex justify-center ms:justify-end gap-6">
          <Question/>
          <Btmes/>
        </div>
      </div>

    </div>
    <div className="mx-8 h-auto w-auto">
      <div className="columns-1 md:columns-3 h-auto w-full mt-10">
        <div className="flex justify-start grid place-content-center">
          <div className="">
            <img
              className="max-w-full xl:h-96 lg:h-80 h-60 rounded-[25px]"
              src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
              alt=""
            />
              <div className="mt-10  flex h-auto">
                <div className="w-3/4 h-full ">
                  <div className="text-4xl font-bold uppercase">kabi</div>
                  <div className="text-xl mt-4">detail</div>
                  <div className="text-xl font-bold"></div>
                </div>
              </div>
          </div>
        </div>

        <div className="flex justify-center grid place-content-center mt-4 md:mt-0">
          <div className="">
            <img
              className="max-w-full xl:h-96 lg:h-80 h-60 rounded-[25px]"
              src="https://assets.brandinside.asia/uploads/2021/03/shutterstock_756956185-scaled.jpg"
              alt=""
            />
              <div className="mt-10  flex h-auto">
                <div className="w-3/4 h-full ">
                  <div className="text-4xl font-bold uppercase">kabi</div>
                  <div className="text-xl mt-4">detail</div>
                  <div className="text-xl font-bold"></div>
                </div>
              </div>
          </div>
        </div>
        <div className="flex justify-end grid place-content-center mt-4 md:mt-0">
          <div className="">
            <img
              className="max-w-full xl:h-96 lg:h-80 h-60 rounded-[25px]"
              src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
              alt=""
            />
              <div className="mt-10  flex h-auto">
                <div className="w-3/4 h-full ">
                  <div className="text-4xl font-bold uppercase">kabi</div>
                  <div className="text-xl mt-4">detail</div>
                  <div className="text-xl font-bold">ห</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Promotion;
