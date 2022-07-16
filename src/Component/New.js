import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const info = "อ่านต่อ >";
const arr = [];
while(arr.length < 4){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push({id:uuidv4(),value:r});
}
console.log(arr[0])
const New = () => {
    const [posts, setPosts] = useState([]);
    // console.log(posts);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
        
      })
      .then((data) => {
        setPosts(data);
      });
  };



//   const fetchReq1 = fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   ).then((res) => res.json());
  


// const allData = Promise.all([fetchReq1, fetchReq2]);

// allData.then((res) => console.log(res));

useEffect(() => {
  fetchData();
}, []);


  return (
    <div>
      <div className="mt-20 mx-8 h-full">
        <div className="text-5xl font-black text-gray-600 mb-10">ข่าวสาร</div>
        <div className="mt-10 ">
          <div className="columns-1 md:columns-2 xl:columns-4 xl:flex grid gap-4  ">
            <div className=" gap-4 justify-center columns-1 md:columns-2 w-full ">
              <div
                data-aos="fade-up"
                className=" justify-center  mt-4 md:mt-0 "
              >
                <div className="w-full">
                  <div className="flex justify-center w-full xl:w-auto">
                    <div className="flex justify-center w-full smx:w-4/6 md:w-full">
                      <img
                        className=" xl:h-96 lg:h-72 md:h-48 h-60 w-full rounded-[25px] "
                        src="https://img.wongnai.com/p/1920x0/2021/01/05/1594a014f59246a5b715994cdadad72a.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  {posts.filter(posts => posts.id === arr[0].value).map(filteredposts => (
                  <div className="mt-10 flex h-auto" key={uuidv4}>
                    <div className="">
                      <div className="text-2xl font-bold uppercase text-clip line-clamp-1">
                        {filteredposts.title}
                      </div>
                      <div className="text-xl mt-4 line-clamp-2 ">
                        {filteredposts.body}
                      </div>
                      <div className="text-xl font-bold">{info}</div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="flex justify-center  mt-4 md:mt-0"
              >
                <div className="w-full">
                  <div className="flex justify-center w-full xl:w-auto">
                    <div className="flex justify-center w-full smx:w-4/6 md:w-full">
                      <img
                        className=" xl:h-96 lg:h-72 md:h-48 h-60 w-full rounded-[25px] "
                        src="https://s.isanook.com/tr/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3RyLzAvdWQvMjgzLzE0MTc0MTUvYWhyMGNobTZseTl6bG1senl3NXZiMnN1eTI5dGxfOS5qcGc=.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  {posts.filter(posts => posts.id === arr[1].value).map(filteredposts => (
                  <div className="mt-10 flex h-auto" key={uuidv4}>
                    <div className="">
                      <div className="text-2xl font-bold uppercase text-clip line-clamp-1">
                        {filteredposts.title}
                      </div>
                      <div className="text-xl mt-4 line-clamp-2 ">
                        {filteredposts.body}
                      </div>
                      <div className="text-xl font-bold">{info}</div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>

            <div className=" gap-4 justify-center columns-1 md:columns-2 w-full ">
              <div
                data-aos="fade-up"
                className="flex justify-end mt-4 md:mt-0 w-full"
              >
                <div className="w-full">
                  <div className="flex justify-center w-full xl:w-auto">
                    <div className="flex justify-center w-full smx:w-4/6 md:w-full">
                      <img
                        className=" xl:h-96 lg:h-72 md:h-48 h-60 w-full rounded-[25px] "
                        src="https://travel.mthai.com/app/uploads/2016/10/The-Grand-Palace-Bangkok-Thailand-20140413.jpg"
                        alt=""
                      />
                    </div>
                  </div>

                  {posts.filter(posts => posts.id === arr[2].value).map(filteredposts => (
                  <div className="mt-10 flex h-auto" key={uuidv4}>
                    <div className="">
                      <div className="text-2xl font-bold uppercase text-clip line-clamp-1">
                        {filteredposts.title}
                      </div>
                      <div className="text-xl mt-4 line-clamp-2 ">
                        {filteredposts.body}
                      </div>
                      <div className="text-xl font-bold">{info}</div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              <div data-aos="fade-up" className="flex justify-end mt-4 md:mt-0">
                <div className="w-full">
                  <div className="flex justify-center w-full xl:w-auto">
                    <div className="flex justify-center w-full smx:w-4/6 md:w-full">
                      <img
                        className=" xl:h-96 lg:h-72 md:h-48 h-60 w-full rounded-[25px] "
                        src="https://www.matichon.co.th/wp-content/uploads/2020/10/london-2393098_1920.jpg"
                        alt=""
                      />
                    </div>
                  </div>

                  {posts.filter(posts => posts.id === arr[3].value).map(filteredposts => (
                  <div className="mt-10 flex h-auto" key={uuidv4}>
                    <div className="">
                      <div className="text-2xl font-bold uppercase text-clip line-clamp-1">
                        {filteredposts.title}
                      </div>
                      <div className="text-xl mt-4 line-clamp-2 ">
                        {filteredposts.body}
                      </div>
                      <div className="text-xl font-bold">{info}</div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New
