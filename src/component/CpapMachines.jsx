import React from "react";

const CpapMachines = ({ machines }) => {
  return (
    <div className=" grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6  ">
      {machines.map((items) => (
        <div
          className="rounded-2xl bg-white border-2 border-gray-400 lg:w-[183px] md:w-[183px] h-auto grid justify-center items-center py-5 "
          key={items.id}
        >
          <div>
            <img
              className=" w-[120.85px] rounded-t-2xl"
              src={items.img}
              alt=""
            />
          </div>
          <p className=" text-center font-bold font-OpenSans ">{items.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CpapMachines;
