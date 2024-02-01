import React from "react";

const BestPlaceOnline = ({ best }) => {
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
      {best.map((items) => (
        <div
          className=" w-[221px] h-auto grid justify-center gap-5"
          key={items.id}
        >
          <div className=" grid justify-center items-center">
            <img className=" w-[120px] h-[120px]" src={items.image} alt="" />
          </div>

          <p className=" text-center font-bold font-OpenSans">{items.text}</p>
          <p className=" text-center font-OpenSans">{items.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BestPlaceOnline;
