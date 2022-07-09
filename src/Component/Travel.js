const Travel = () => (
  <div>
    <div className="mt-10 mx-8 h-auto w-auto">
      <div>
        <div className="text-5xl font-black text-gray-600 mb-10">เที่ยวชิวๆ</div>
      </div>
      <div className="mt-10 h-auto w-auto">
        <div className="columns-1 md:columns-4 h-auto w-full">
          <div className="flex justify-start grid place-content-center mt-4 md:mt-0">
            <div className="">
              <img
                className="max-w-full xl:h-96 lg:h-72 md:h-48 h-60 rounded-[25px] "
                src="https://img.wongnai.com/p/1920x0/2021/01/05/1594a014f59246a5b715994cdadad72a.jpg"
                alt=""
              />
              <div className="mt-10  flex h-auto">
                <div className="w-3/4 h-full ">
                  <div className="text-4xl font-bold uppercase">kabi</div>
                  <div className="text-xl mt-6">2,200 Baht</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center grid place-content-center mt-4 md:mt-0">
            <div className="w-full">
              <img
                className="max-w-full xl:h-96 lg:h-72 md:h-48 h-60  rounded-[25px] bg-red-300"
                src="https://s.isanook.com/tr/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3RyLzAvdWQvMjgzLzE0MTc0MTUvYWhyMGNobTZseTl6bG1senl3NXZiMnN1eTI5dGxfOS5qcGc=.jpg"
                alt=""
              />
              <div className="mt-10  flex h-auto">
                <div className="w-3/4 h-full ">
                  <div className="text-4xl font-bold uppercase">
                    maldives
                  </div>
                  <div className="text-xl mt-6">5,200 Baht</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end grid place-content-center mt-4 md:mt-0">
            <div className="">
              <img
                className="max-w-full xl:h-96 lg:h-72 md:h-48 h-60 rounded-[25px]"
                src="https://travel.mthai.com/app/uploads/2016/10/The-Grand-Palace-Bangkok-Thailand-20140413.jpg"
                alt=""
              />
              <div className="mt-10  flex h-auto">
                <div className="w-3/4 w-full h-full ">
                  <div className="text-4xl font-bold uppercase ">
                    kho yai
                  </div>
                  <div className="text-xl mt-6">3,200 Baht</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end grid place-content-center mt-4 md:mt-0">
            <div className="">
              <img
                className="max-w-full xl:h-96 lg:h-72 md:h-48 h-60 rounded-[25px]"
                src="https://www.matichon.co.th/wp-content/uploads/2020/10/london-2393098_1920.jpg"
                alt=""
              />
              <div className="mt-10  flex h-auto">
                <div className="w-3/4 w-full h-full ">
                  <div className="text-4xl font-bold uppercase">
                    kho yai
                  </div>
                  <div className="text-xl mt-6">3,200 Baht</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Travel;
