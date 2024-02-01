import React from "react";
import { Link } from "react-router-dom";

const SecNav = () => {
  return (
    <div className="bg-[#615C99] lg:px-16 md:px-10 px-8 py-4 ">
      <ul className=" flex flex-wrap text-center lg:gap-20 md:gap-20 gap-5 text-white font-bold">
        <Link to="/cpap_machine" className="text-[16px] cursor-pointer">
          Machines
        </Link>
        <li className="text-[16px] cursor-pointer">Masks</li>
        <li className="text-[16px] cursor-pointer">CPAP Supplies</li>
        <li className="text-[16px] cursor-pointer">Humidifiers</li>
        <li className="text-[16px] cursor-pointer">More..</li>
      </ul>
    </div>
  );
};

export default SecNav;
