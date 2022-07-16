import React from "react";
import "./Navbar.css";
import logonav from "../image/logo-nav.png";

const Navbar = () => (
  <div>
    <div className="bg-black bg-opacity-50 h-24 w-screen text-white fixed inset-x-0 flex z-position">
      <div className="text-5xl items-center ml-5">
        <img className=" w-24 h-fit" src={logonav} alt="" />
      </div>
      <div className="w-full">
        <div className="lg:contents hidden">
          <ul className="items-center h-24 text-2xl gap-4 flex justify-end">
            <li className="">หน้าแรก</li>
            <li className="">เกี่ยวกับเรา</li>
            <li className="">สินค้าและบริการ</li>
            <li className="">โปรโมชั่น</li>
            <li className="">ลูกค้าองค์กร</li>
            <li className="pr-10">ติดต่อคาร์ไลล์</li>
          </ul>
        </div>
      </div>
      <div className="lg:hidden flex items-center">
        <button className="outline-none mobile-menu-button">
          <svg
            className="w-14 h-full text-white mr-4"
            x-show="!showMenu"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Navbar;
