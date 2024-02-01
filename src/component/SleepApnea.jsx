import React from "react";

const SleepApnea = ({ sleep }) => {
  return (
    <div className="  ">
      {sleep.map((item) => (
        <div
          className=" lg:flex md:flex grid justify-between items-center gap-28"
          key={item.id}
        >
          <div className=" lg:w-1/2 md:w-1/2 w-full">
            <p className="text-[30px] font-bold font-lora">{item.title}</p>
            <p className=" font-OpenSans">{item.text}</p>
          </div>
          <div className=" lg:w-1/2 md:w-1/2 w-full">
            <img className=" w-[300px]" src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SleepApnea;
