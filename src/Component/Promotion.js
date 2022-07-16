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
          <Question />
          <Btmes />
        </div>
      </div>
    </div>
    <div className="mx-8 h-auto w-auto">
      <div className="columns-1 md:columns-3 h-auto w-full mt-10">
        <div
          data-aos="fade-up"
          className="flex justify-end mt-4 md:mt-0 w-full"
        >
          <div className="w-full">
            <div className="flex justify-center w-full xl:w-auto">
              <div className="flex justify-center w-full smx:w-4/6 md:w-full">
                <img
                  className=" xl:h-96 lg:h-72 md:h-48 h-60 w-full rounded-[25px] "
                  src="https://quinl.quinlcdn.com/productImages/UploadImages/1810/1539069815_80904.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-10  flex h-auto">
              <div className="w-3/4 h-full ">
                <div className="text-4xl font-bold uppercase">
                  แพ็คเกจทัวร์ญี่ปุน
                </div>
                <div className="text-xl mt-4">
                  4 ที่นั่งสุดท้าย (เดินทางช่วงวันแม่) เพียง 25,900 บาท/ท่าน
                </div>
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
                  src="https://quinl.quinlcdn.com/productImages/UploadImages/1810/1539061249_10678.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-10  flex h-auto">
              <div className="w-3/4 h-full ">
                <div className="text-4xl font-bold uppercase">
                  เมลเบิร์นราคาพิเศษ
                </div>
                <div className="text-xl mt-4">
                  เริ่มต้นที่ 15,300บาท ราคาไปกลับ รวมสัมภาระ 20 กก.
                </div>
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
                  src="https://www.unithaitravel.com/__files/head/%E0%B8%AD%E0%B8%B4%E0%B8%95%E0%B8%B2%E0%B8%A5%E0%B8%B5-%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%AA-%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A8%E0%B8%AA-h-220509.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-10  flex h-auto">
              <div className="w-3/4 h-full ">
                <div className="text-4xl font-bold uppercase">
                  ยุโรปราคาประหยัด
                </div>
                <div className="text-xl mt-4">
                  ยุโรป อเมริกา ราคาประหยัด พร้อมบริการ ระดับ 5 ดาว
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Promotion;
