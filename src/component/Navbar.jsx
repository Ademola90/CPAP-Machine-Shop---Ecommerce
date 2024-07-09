import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Inbox from "./Inbox";
import SignUp from "../screen/sign-up";
import Login from "../screen/login";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);

  const handleOpenSignUp = () => {
    setSignup(true);
    setLogin(false);
  };

  const handleOpenLogin = () => {
    setLogin(true);
    setSignup(false);
  };

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" sticky top-0 left-0 right-0 z-20 lg:px-16 md:px-10 px-8 flex py-4 items-center justify-between">
      <div className=" flex items-center lg:gap-20 md:gap-10">
        <Link to="/">
          <img
            className=" lg:w-[261px] md:w-[241px] w-[131px] lg:h-[56px] md:h-[56px] h-[36px]"
            // src={require("../Assets/Group 2491.png")}
            src="../../../assets/Group_2491.png"
            alt=""
          />
        </Link>

        <div>
          <div className="lg:block md:block hidden">
            <Inbox />
          </div>
        </div>
      </div>

      <div className=" lg:flex md:flex hidden items-center gap-5  ">
        <Link
          to="/cpap_machine"
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            className="w-[25px] h-[25px]"
            src="../../../assets/Frame_38_(1).png"
            alt=""
          />
          <p>Blog</p>
        </Link>
        <div
          onClick={handleOpenLogin}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            className="w-[25px] h-[25px]"
            src="../../../assets/Frame_37.png"
            alt=""
          />
          <p>Login</p>
        </div>
        {signup && (
          <SignUp
            onClick={() => setSignup(false)}
            openLogin={handleOpenLogin}
          />
        )}
        {login && (
          <Login
            onClick={() => setLogin(false)}
            openSignUp={handleOpenSignUp}
          />
        )}
      </div>

      {/* Mobile screen */}

      <div className=" lg:grid lg:absolute md:absolute items-center gap-5">
        <div
          className="cursor-pointer lg:hidden md:hidden block"
          onClick={toggleMenu}
        >
          <FaBars size={25} />
        </div>

        {isMenuOpen && (
          <div className="absolute top-20 right-0 bg-white py-4 px-6 text-black w-[300px] h-auto gap-5 grid z-20 ">
            <div className="  flex items-center gap-2 cursor-pointer">
              <img
                className="w-[25px] h-[25px]"
                src="../../../assets/Frame_38_(1).png"
                alt=""
              />
              <Link to="/cpap_machine">Blog</Link>
            </div>
            <div
              onClick={handleOpenLogin}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img
                className="w-[25px] h-[25px]"
                src="../../../assets/Frame_37.png"
                alt=""
              />
              <p className=" ">Login</p>
            </div>
            {signup && (
              <SignUp
                onClick={() => setSignup(false)}
                openLogin={handleOpenLogin}
              />
            )}
            {login && (
              <Login
                onClick={() => setLogin(false)}
                openSignUp={handleOpenSignUp}
              />
            )}
            {/* <div className="flex items-center gap-2 cursor-pointer">
              <img
                className="w-[25px] h-[25px]"
                src="../../../assets/Frame_36.png"
                alt=""
              />
              <p>Cart</p>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
