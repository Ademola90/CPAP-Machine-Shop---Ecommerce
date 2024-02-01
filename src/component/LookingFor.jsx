import React from "react";

const LookingFor = ({ looking }) => {
  return (
    <div>
      {looking.map((item) => (
        <div
          key={item.id}
          className=" lg:flex md:flex grid lg:gap-0 md:gap-0 gap-20 justify-center items-center py-10"
        >
          <div className=" lg:w-1/2 md:w-1/2 w-full grid gap-5">
            <p>{item.text}</p>
            <p className=" text-[30px] font-bold font-lora">{item.text2}</p>
            <p>{item.tex3}</p>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">
              <button className=" w-[145px] h-[43px] border-2 border-gray-500 rounded-3xl font-OpenSans bg-white text-[#1473AC] ">
                {item.btn1}
              </button>
              <button className="w-[145px] h-[43px] border-2 border-gray-500 rounded-3xl font-OpenSans bg-white text-[#1473AC] ">
                {item.btn2}
              </button>
              <button className="w-[125px] h-[43px]  border-2 border-gray-500 rounded-3xl font-OpenSans bg-white text-[#1473AC] ">
                {item.btn3}
              </button>
              <button className="w-[145px] h-[43px] border-2 border-gray-500 rounded-3xl font-OpenSans bg-white text-[#1473AC] ">
                {item.btn4}
              </button>
              <button className="w-[145px] h-[43px] border-2 border-gray-500 rounded-3xl font-OpenSans bg-white text-[#1473AC] ">
                {item.btn5}
              </button>
            </div>
          </div>

          <div className=" lg:w-1/2 md:w-1/2 w-full">
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LookingFor;
