import React from "react";

const Footer = () => {
  return (
    <div className="  py-20 ">
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 pb-10 grid-cols-2 lg:gap-0 md:gap-0 gap-10 justify-between">
        <ul className=" grid text-[#555555]">
          <li className=" font-bold text-black">Company</li>
          <li className=" pt-3">About Us</li>
          <li>FAQ</li>
          <li>Resources</li>
          <li>Contact Us</li>
          <li>Site Map</li>
        </ul>
        <ul className=" grid text-[#555555]">
          <li className=" font-bold text-black">Shop</li>
          <li className=" pt-3">Shipping</li>
          <li>Prescription</li>
          <li>Warranty & Returns</li>
          <li>Mask Assurance</li>
          <li>Manufacturers</li>
        </ul>
        <ul className=" grid text-[#555555]">
          <li className=" font-bold text-black">Get Help</li>
          <li className=" pt-3">Reward Points</li>
          <li>No Prescription?</li>
          <li>CPAP Rental</li>
          <li>New To CPAP</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="text-[#555555] lg:grid md:flex grid ">
          <div>
            <li className=" font-bold text-black lg:pt-0 md:pt-10 pt-0 ">
              Sign Up for Our Newsletter
            </li>
            <li className="pt-3 lg:w-auto md:w-[400px] w-auto">
              Be the first to know about our News and Great Deals!
            </li>
          </div>

          {/* Search  box */}
          <div className=" lg:flex md:flex hidden items-center pt-4">
            <input
              className="w-[290.92px] pl-2 pr-20 h-[45px] rounded-full border-2 border-gray-400 bg-white text-black"
              placeholder="Enter your text"
              type="text"
            />
            <button className=" absolute hover:scale-105 duration-300 ease-in lg:right-[60px] md:right-[110px] right-[70px] w-[150px] h-[35px] text-[#FFFFFF] bg-[#F0592A] rounded-full font-OpenSans">
              Sigh Up
            </button>
          </div>
        </ul>
      </div>
      {/* search box that show on mobile screen */}
      <div className=" grid">
        <div>
          <div className=" lg:hidden md:hidden flex items-center pt-4">
            <input
              className="w-[300.92px] pl-2 pr-20 h-[45px] rounded-full border-2 border-gray-400 bg-white text-black"
              placeholder="Enter your text"
              type="text"
            />
            <button className=" absolute hover:scale-105 duration-300 ease-in right-[65px] w-[150px] h-[35px] text-[#FFFFFF] bg-[#F0592A] rounded-full font-OpenSans">
              Sigh Up
            </button>
          </div>
        </div>

        <div className=" grid gap-10 lg:mt-0 md:mt-0 mt-10">
          <div className=" flex justify-center items-center">
            <div className=" flex gap-10">
              <img
                className="w-[17.33px] h-[17.33px]"
                src={require("../asset/Vector.png")}
                alt=""
              />
              <img
                className="w-[17.33px] h-[17.33px]"
                src={require("../asset/Vector (1).png")}
                alt=""
              />
              <img
                className="w-[17.33px] h-[17.33px]"
                src={require("../asset/Vector (2).png")}
                alt=""
              />
              <img
                className="w-[17.33px] h-[17.33px]"
                src={require("../asset/Vector (3).png")}
                alt=""
              />
              <img
                className="w-[17.33px] h-[17.33px]"
                src={require("../asset/Vector (4).png")}
                alt=""
              />
            </div>
          </div>

          <div className=" grid justify-center items-center">
            <p className=" text-center font-OpenSans lg:w-[800px]">
              © 2023 CPAP Market - Cheapest CPAP Machines & Supplies * Subject
              to the manufacturer's minimum internet retail pricing and may
              therefore not qualify under these programs. ** All ResMed products
              are for sale only to patients with in the United States and not to
              other third parties or businesses. ** Except weekends and
              holidays. There may be Customs delays.
            </p>
          </div>
          <div className=" grid  justify-center items-center">
            <div className=" flex flex-wrap gap-10 items-center justify-center">
              <img
                className=" w-[80px] h-[39px]"
                src={require("../asset/image45.png")}
                alt=""
              />
              <img
                className=" w-[47px] h-[48px]"
                src={require("../asset/image46.png")}
                alt=""
              />
              <img
                className=" w-[72px] h-[58px]"
                src={require("../asset/image47.png")}
                alt=""
              />
              <img
                className=" w-[243px] h-[68px]"
                src={require("../asset/image48.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
