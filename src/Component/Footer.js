import logo from "../image/logo-nav.png";
import {
  FaFacebook,
  FaInstagram,
  FaLine,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { Button } from "antd"

const Footer = () => (
  <div>
    <div className="bg-neutral-500 text-white tracking-wide h-auto">
      <div className="h-auto w-full py-10 xl:flex xl:justify-center md:columns-2">
        <div className="sm:w-1/4 w-full max-h-40 flex justify-center xl:contents md:hidden">
          <img className="md:w-40 w-28 " src={logo} alt="" />
        </div>
        <div className="h-full xl:w-1/5 flex justify-center">
          <div className="text-base leading-7 mb-4 sm:mb-0">
            <div className="font-bold">ติดต่อสอบถาม / ขอใบเสนอราคา</div>
            <div>ตัวแทนจำหน่าย</div>
            <div className="uppercase mr-2 flex">
              tel/fax :<div className="uppercase mr-2">+6699-999999</div>
            </div>
            <div className="uppercase mr-2 flex">
              hotline :<div className="uppercase mr-2">+6699-999999</div>
            </div>
            <div className="uppercase mr-2 flex">
              email :<div className="uppercase mr-2">kaline@gmail.com</div>
            </div>
            <div className="uppercase mr-2">www.kaline.com</div>
          </div>
        </div>
        <div className="xl:w-2/12 md:w-full md:h-full md:mt-2 flex justify-center">
          <div className="h-full w-fit text-base leading-7 mb-4 sm:mb-0">
            <div className="">
              <div className="border-b">หน้าแรก</div>
              <div className="border-b">เกี่ยวกับเรา</div>
              <div className="border-b">สินค้าและบริการ</div>
              <div className="border-b">โปรโมชั่น</div>
              <div className="border-b">ลูกค้าองค์กร</div>
              <div className="border-b">ติดต่อ</div>
            </div>
          </div>
        </div>
        <div className="xl:w-2/12 md:w-full md:h-full flex justify-center mb-4 sm:mb-0">
          <div className="text-white ">
            <IconContext.Provider
              value={{
                color: "#ffffff",
                size: "1.5rem",
              }}
            >
              <div className="uppercase text-lg ml-1 ">follow us</div>
              <div className="flex text-base leading-7">
                <div className="mr-2">
                  <FaFacebook />
                </div>
                คาร์ไลล์ ทาโคน
              </div>
              <div className="flex text-base leading-7">
                <div className="mr-2 ">
                  <FaInstagram />
                </div>
                คาร์ไลล์ ทาโคน
              </div>
              <div className="flex text-base leading-7">
                <div className="mr-2">
                  <FaLine />
                </div>
                คาร์ไลล์ ทาโคน
              </div>
              <div className="flex text-base leading-7">
                <div className="mr-2">
                  <FaTwitterSquare />
                </div>
                คาร์ไลล์ ทาโคน
              </div>
              <div className="flex text-base leading-7">
                <div className="mr-2">
                  <FaYoutube />
                </div>
                คาร์ไลล์คาร์ไลล์ ทาโคน
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className=" md:mt-2 flex justify-center grid content-center">
          <div className="grid h-fit w-60">
            <div className="uppercase mb-2 font-bold text-lg">sign up </div>
            <input placeholder="  your email" className="rounded-2xl uppercase py-1 " type="text"></input>
            <Button shape="round"
          danger
          style={{
            backgroundColor: "#cf1322",
          }} className="w-24 mt-4">
            <div className="uppercase text-white ">sign up</div></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
