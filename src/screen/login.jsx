import React from "react";
import Inputs, { PasswordInputs } from "../component/inputs";
import Buttons from "../component/buttons/buttons";

const Login = ({ onClick, openSignUp }) => {
  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClick}
      className="fixed z-0 cursor-pointer left-0 top-0 w-full h-full bg-black bg-opacity-45 grid justify-center items-center"
    >
      <div
        onClick={handleCardClick}
        className="bg-white w-[360px] h-auto p-5 z-20 relative"
      >
        <div className="flex justify-between items-center">
          <p className="font-OpenSans lg:text-3xl md:text-2xl text-xl font-semibold text-[#000]">
            Login
          </p>
          <p className="text-sm font-OpenSans text-gray-400 w-32">
            Don't have an account{" "}
            <span onClick={openSignUp} className="text-red-300 cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
        <div className="mt-5">
          <Inputs
            placeholder="enter user name"
            label="User Name"
            css={"border w-full rounded-2xl h-[49px] px-2 outline-none"}
          />
        </div>
        <div className="mt-5">
          <Inputs
            placeholder="enter email address"
            label="Email Address"
            css={"border w-full rounded-2xl h-[49px] px-2 outline-none"}
          />
        </div>
        <div className="mt-5">
          <PasswordInputs
            placeholder="enter password"
            label="Password"
            css={"w-full h-[49px]"}
          />
        </div>
        <div className="flex items-center justify-between mt-5">
          <p className="text-sm font-OpenSans text-blue-500 cursor-pointer">
            Forget Password{" "}
          </p>
        </div>
        <div className="flex justify-center items-center mt-5">
          <Buttons
            text="Login"
            css={"text-[#fff] bg-[#F0592A] w-[113px] h-[39px] rounded-full "}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
