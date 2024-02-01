import React from "react";

const Replacement = ({ replacement }) => {
  return (
    <div>
      {replacement.map((items) => (
        <div
          className=" lg:flex md:flex grid items-center justify-center gap-10"
          key={items.id}
        >
          <div className=" lg:w-1/2 md:w-1/2 w-full">
            <img src={items.img} alt="" />
          </div>
          <div className=" lg:w-1/2 md:w-1/2 w-full grid lg:px-0 md:px-0 px-8 gap-3">
            <p className=" font-OpenSans">{items.text}</p>
            <p className=" text-[30px] font-lora font-bold">{items.title}</p>
            <ul className=" list-disc pl-4 grid gap-3">
              <li>{items.list1}</li>
              <li>{items.list2}</li>
              <li>{items.list3}</li>
              <li>{items.list4}</li>
            </ul>
            <button className=" mt-10 rounded-3xl bg-[#F0592A] w-[200px] h-[50px] text-white hover:scale-105 hover:transition hover:duration-300 ease-in">
              {items.btn}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Replacement;
