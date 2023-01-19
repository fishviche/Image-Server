import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Login = () => {

  const handleClick = () => {
    window.open("https://github.com/fishviche/Image-Server");
  }

  return (
    <>
      <div className="relative flex items-center justify-center h-screen bg-gray-300">
        <div className="max-w-sm w-full h-[480px] flex-col border bg-white px-6 py-14 shadow-md rounded-[4px]">
          <div className="mb-8 flex justify-center">
            <img
              className="w-24"
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col text-sm rounded-md">
            <input
              className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
              type="text"
              placeholder="Username or Email id"
            />
            <input
              className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
            type="submit"
          >
            Sign in
          </button>
          <div className="mt-5 flex text-center text-sm text-gray-400">
            <p>
              This site is protected by reCAPTCHA and the Google <br />
              <a className="underline" href="">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a className="underline" href="">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </div>
        {/* FOOTER */}
        <div className="absolute bottom-5 right-auto text-gray-700 font-light text-sm transition ease-linear duration-150 hover:text-black cursor-pointer"
        onClick={handleClick}>
          View code  <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
    </>
  );
};

export default Login;
