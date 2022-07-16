import React from "react";
import "./Navbar.css";
import logonav from "../image/logo-nav.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="px-2 bg-black bg-opacity-50 fixed flex flex-wrap items-center lg:py-0 py-2 w-full z-position">
        <div className="flex-1 flex justify-between items-center">
          <a href="#">
            <img className=" w-24 h-fit " src={logonav} alt="" />
          </a>
        </div>
        <label htmlFor="menu-toggle" className="pointer-cursor xl:hidden block">
          <svg
            className="w-14 h-full text-white mr-4"
            x-show="!showMenu"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden xl:flex xl:items-center xl:w-auto w-full"
          id="menu"
        >
          <nav className="">
            <ul className="menu-a xl:flex my-auto items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 text-2xl md:text-3xl gap-4">
              <li className="pb-4 lg:mb-2">
                <Link to="/">หน้าแรก</Link>
              </li>
              <li className="pb-4 lg:mb-2">
                <Link to="/insert">เกี่ยวกับเรา</Link>
              </li>
              <li className="pb-4 lg:mb-2">
                <Link to="">สินค้าและบริการ</Link>
              </li>
              <li className="pb-4 lg:mb-2">
                <Link to="">โปรโมชั่น</Link>
              </li>
              <li className="pb-4 lg:mb-2">
                <Link to="">ลูกค้าองค์กร</Link>
              </li>
              <li className="pb-4">
                <Link to="">ติดต่อคาร์ไลล์</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
