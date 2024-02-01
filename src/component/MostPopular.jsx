import React from "react";

const MostPopular = ({ popular }) => {
  return (
    <div>
      {popular.map((items) => (
        <div
          className="lg:flex md:flex grid lg:gap-0 md:gap-0 gap-20 items-center justify-center"
          key={items.id}
        >
          <div className=" lg:w-1/2 md:w-1/2 w-full">
            <p className=" text-[30px] font-bold font-lora">{items.text}</p>
            <ul className=" list-disc grid pl-5 gap-2 ">
              <li className="  text-blue-500 ">{items.list}</li>

              <li className="  text-blue-500 ">{items.list2}</li>
              <li className="  text-blue-500 ">{items.list3}</li>
              <li className="  text-blue-500 ">{items.list4}</li>
              <li className="  text-blue-500 ">{items.list5}</li>
              <li className="  text-blue-500 ">{items.list6}</li>
            </ul>
          </div>
          <div className=" lg:w-1/2 md:w-1/2 w-full">
            <img src={items.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPopular;
