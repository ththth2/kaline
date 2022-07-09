import logo from "../image/logo.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLine,
  FaTwitterSquare,
  FaYoutube,
  FaDrupal,
  FaReddit,
  FaHtml5,
  FaCss3,
  FaYahoo,
  FaGoogle,
  FaCertificate,
} from "react-icons/fa";
import {
  AiOutlineChrome,
  AiFillIeSquare,
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillWindows,
} from "react-icons/ai";
import { IconContext } from "react-icons";

const About = () => (
  <div>
    <div className="mx-8 mt-10 h-auto  flex justify-center grid">
      <div className="mx-auto">
        <img className=" w-fit h-40" src={logo} alt="" />
      </div>
      <div className="w-screen">
          <div className="text-xl mt-4 w-screen">
            <div className="flex justify-center">
              "คาร์ไลล์ ทาโคน" ก่อตั้งขึ้นในปี พ.ศ. 2565 โดยการบริหารงานของ บริษัท
              ทาโคน เทรดดิง จํากัด
              <br />
            </div>
            <div className="flex justify-center">
              ในเครือบริษัท ทาโคน เซอร์วิสเซส จํากัด
              ซึ่งดำเนินธุรกิจเกี่ยวกับการให้บริการ
              <br />
            </div>
            <div className="flex justify-center">
              การตรวจสอบท่อขนส่งน้ำมัน และก๊าซ
              แก่บริษัทในธุรกิจปิโตรเลียมชั้นนำทั่วโลก
            </div>
          </div>
      </div>

<div className="flex justify-center gap1 sm:gap-12 h-auto mt-10">
        <IconContext.Provider
          value={{
            color: "#8c8c8c",
            size: "3rem",
          }}
        >
          <FaFacebook />
          <FaInstagram />
          <FaLine />
          <FaTwitterSquare />
          <FaYoutube />
        </IconContext.Provider>
      </div>

    </div>
    <div className="w-full h-auto bg-neutral-400 mt-10">
      <div className="flex justify-center py-4 gap-1 sm:gap-6">
        <IconContext.Provider
          value={{
            color: "#434343",
            size: "3rem",
          }}
        >
          <FaDrupal />
          <FaReddit />
          <FaHtml5 />
          <FaCss3 />
          <FaYahoo />
          <FaGoogle />
          <FaCertificate />
          <AiOutlineChrome />
          <AiFillIeSquare />
          <AiFillTwitterSquare />
          <AiFillGithub />
          <AiFillWindows />
        </IconContext.Provider>
      </div>
    </div>
  </div>
);

export default About;
