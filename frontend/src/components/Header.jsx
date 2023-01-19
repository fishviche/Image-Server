import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 border-b-2 border-blue-500">
        <div className="flex-1 flex justify-between items-center">
            <div className="flex justify-center items-center">
              <img
                className="w-12"
                src="https://freesvg.org/img/Soma-9-2016080921.png"
                alt=""
              />
            </div>
        </div>

        <label className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <span
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent transition duration-200 ease-in-out hover:border-blue-500"
                  href="#"
                >
                  <Link to="/home">View</Link>
                </span>
              </li>
              <li>
                <span
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent transition duration-200 ease-in-out hover:border-blue-500"
                  href="#"
                >
                  <Link to="/upload">Upload</Link>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
