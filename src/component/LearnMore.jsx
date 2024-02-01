import React from "react";

const LearnMore = ({ learn }) => {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
      {learn.map((items) => (
        <div className=" grid gap-5" key={items.id}>
          <img src={items.img} alt="" />
          <div>
            <p className="font-bold text-[18px] font-OpenSans">{items.title}</p>
            <p>{items.text}</p>
            <button className=" underline text-blue-500  font-OpenSans">
              {items.btn}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearnMore;
