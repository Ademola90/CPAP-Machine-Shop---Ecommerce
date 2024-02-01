import React from "react";

const Companys = ({ company }) => {
  return (
    <div className=" grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 justify-center items-center gap-10">
      {company.map((items) => (
        <div key={items.id}>
          <img className=" w-[180] h-[28px]" src={items.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Companys;
