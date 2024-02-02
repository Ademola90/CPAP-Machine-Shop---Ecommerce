import React from "react";
import Hero from "../asset/Frame_45.png";
import imag1 from "../asset/Imagesone.png";
import CpapMachines from "../component/CpapMachines";
import img2 from "../asset/Imagestwo.png";
import img3 from "../asset/Imagesthree.png";
import img4 from "../asset/Imagefour.png";
import img5 from "../asset/Imagesfive.png";
import img6 from "../asset/Imagessix.png";
import Frame1 from "../asset/Frame1.png";
import Frame2 from "../asset/Frame2.png";
import Frame3 from "../asset/Frame3.png";
import Frame4 from "../asset/Frame4.png";
import Frame5 from "../asset/Frame5.png";
import Frame6 from "../asset/Frame6.png";
import Frame7 from "../asset/Frame7.png";
import Frame8 from "../asset/Frame8.png";
import BestPlaceOnline from "../component/BestPlaceOnline";
import MostPopular from "../component/MostPopular";
import Frame9 from "../asset/Frame9.png";
import Replacement from "../component/Replacement";
import Image22 from "../asset/image22.png";
import Image23 from "../asset/image23.png";
import LookingFor from "../component/LookingFor";
import Rec1 from "../asset/Rectangle1.png";
import Rec2 from "../asset/Rectangle2.png";
import LearnMore from "../component/LearnMore";
import Companys from "../component/Companys";
import Group1 from "../asset/Group1.png";
import Group2 from "../asset/Group2.png";
import Group3 from "../asset/Group3.png";
import Group4 from "../asset/Group4.png";
import Group5 from "../asset/Group5.png";
import Group6 from "../asset/Group6.png";
import Group7 from "../asset/Group7.png";
import Group8 from "../asset/Group8.png";
import Group9 from "../asset/Group9.png";
import Footer from "../component/Footer";

const PageOne = () => {
  // Machine
  const machines = [
    {
      id: 1,
      img: imag1,
      text: "CPAP Machines",
    },
    {
      id: 2,
      img: img2,
      text: "CPAP Masks",
    },
    {
      id: 3,
      img: img3,
      text: "CPAP Supplies",
    },
    {
      id: 4,
      img: img4,
      text: "Humidifiers & Parts",
    },
    {
      id: 5,
      img: img5,
      text: "Oxygen & Supplies",
    },
    {
      id: 6,
      img: img6,
      text: "Category Link",
    },
  ];

  // Best place Online
  const best = [
    {
      id: 1,
      image: Frame1,
      text: "Return Mask if You don't Like It!",
      description:
        "If you cannot sleep well because of the mask, return it in 30 days!",
    },
    {
      id: 2,
      image: Frame2,
      text: "Financing Available",
      description:
        "You may qualify for no downpayment, 0% interest rate for 12 months!",
    },
    {
      id: 3,
      image: Frame3,
      text: "Fast Worldwide Shipping **",
      description:
        "All packages shipped in 24hrs. You may receive it in 1-6 business days no matter where you are",
    },
    {
      id: 4,
      image: Frame4,
      text: "Free Shipping for Orders $49 or Above",
      description: "Ground shipping to 48 contiguous US states only",
    },
    {
      id: 5,
      image: Frame5,
      text: "Price Match",
      description: "We match any licensed US CPAP dealers' prices",
    },
    {
      id: 6,
      image: Frame6,
      text: "Home Sleep Apnea Testing only $349",
      description:
        "Have your Sleep Apnea Test at your home for only $349, and have 5% discount if you need CPAP supplies",
    },
    {
      id: 7,
      image: Frame7,
      text: "Reward Points",
      description: "Earn more with our Reward Points Program",
    },
    {
      id: 8,
      image: Frame8,
      text: "CPAP Rental",
      description:
        "Rent a CPAP machine if you are not sure you like it, or just for temporary back up",
    },
  ];

  // Most Popular
  const popular = [
    {
      id: 1,
      img: Frame9,
      list: "ComfortGel Blue Nasal Mask",
      list2: "Dreamwear Nasal Mask",
      list3: "N30i Nasal Mask",
      list4: "P10 Nasal Pillow Mask",
      list5: "Wisp Nasal Mask",
      list6: "Nuance Pro CPAP Mask",
      text: "Top Ten Most Popular CPAP Masks in 2023",
    },
  ];

  // Replacement
  const replacement = [
    {
      id: 1,
      img: Image22,
      text: "You need to know!",
      title: "Replacement Schedule",
      list1: "Mask – every 6 months",
      list2: "Machine filters – every 3 - 6 weeks",
      list3: "Tubing – every 3 months",
      list4: "Water tub – every 6 - 12 months",
      btn: "Read More",
    },
  ];

  // Looking
  const looking = [
    {
      id: 1,
      text: "What we offer",
      text2: "Looking for CPAP mask parts?",
      text3:
        "CPAP Market has all CPAP mask accessories, including headgear, cushion/pillows, clips, frames, tubes, elbows, and more ready to ship today.",
      img: Image23,
      btn1: "Clips",
      btn2: "Frames",
      btn3: "Tubes",
      btn4: "Elblws",
      btn5: "Search all",
    },
  ];

  // Learn More
  const learn = [
    {
      id: 1,
      img: Rec1,
      title: "Spring cleaning tips for CPAP users",
      text: "You know that feeling when your room is tidy, your bed is made and your sheets are fresh? Do you relish the sense of calm when everything is in it...",
      btn: "Read more",
    },
    {
      id: 2,
      img: Rec2,
      title: "CPAP therapy: Your key to anti-aging?",
      text: "By Marygrace Taylor Talk about beauty rest: For sleep apnea patients, using continuous positive airway pressure (CPAP) can do more than help you...",
      btn: "Read more",
    },
    {
      id: 1,
      img: Rec1,
      title: "Activated oxygen: A scientifically proven way to clean your CPAP",
      text: "For a continuous positive airway pressure (CPAP) machine to be effective, it needs two things from you: — Use your CPAP machine consistently, as p...",
      btn: "Read more",
    },
  ];

  // companys
  const company = [
    {
      id: 1,
      img: Group1,
    },
    {
      id: 2,
      img: Group2,
    },
    {
      id: 3,
      img: Group3,
    },
    {
      id: 4,
      img: Group4,
    },
    {
      id: 5,
      img: Group5,
    },
    {
      id: 6,
      img: Group6,
    },
    {
      id: 7,
      img: Group7,
    },
    {
      id: 8,
      img: Group8,
    },
    {
      id: 9,
      img: Group9,
    },
  ];

  return (
    <div>
      {/* <Navbar />
      <SecNav /> */}

      <div
        className=" bg-no-repeat bg-center bg-cover flex justify-end lg:py-[40px] md:py-[40px] py-[80px]  items-center"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className=" grid w-[400px] lg:px-0 md:px-0 px-8  h-auto lg:relative lg:right-[150px]">
          <p className=" text-[20px] font-semibold lg:pt-0 md:pt-0 pt-5">
            You’ll Sleep Like a Baby Abroad!
          </p>
          <div className=" lg:text-[60px] md:text-[60px] text-[40px] font-bold font-lora">
            New Z2 Auto Travel CPAP
          </div>
          <p className=" font-OpenSans lg:pt-0 md:pt-0 pt-5">
            With a new motor 29% quieter than the Z1, the Z2 is designed to
            minimize the pitch of the motor for optimal comfort.
          </p>
          <button className=" mt-10 rounded-3xl bg-[#F0592A] w-[200px] h-[50px] text-white hover:scale-105 hover:transition hover:duration-300 ease-in">
            Buy Now
          </button>
        </div>
      </div>

      {/* Buttons */}
      <ul className="lg:px-32 md:px-10 px-8 py-10 flex flex-wrap items-center lg:justify-between md:justify-between justify-center lg:gap-0 md:gap-5 gap-5">
        <li className=" lg:w-[197px] md:w-[197px] w-[127px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center items-center">
          Products
        </li>
        <li className=" lg:w-[197px] md:w-[197px] w-[127px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center items-center">
          Brands
        </li>
        <li className=" lg:w-[197px] md:w-[197px] w-[127px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center items-center">
          Sales
        </li>
        <li className=" lg:w-[197px] md:w-[197px] w-[127px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center items-center">
          Services
        </li>
        <li className=" lg:w-[197px] md:w-[197px] w-[127px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center items-center">
          Resources
        </li>
      </ul>
      {/* CPAP Machine */}
      <div className=" grid justify-center items-center">
        <p className=" text-center font-bold lg:text-[30px] md:text-[30px] text-[20px] font-lora py-5">
          CPAP Machines, Masks & Resources
        </p>
        <div className="lg:px-16 md:px-10 px-8 grid justify-center items-center ">
          <CpapMachines machines={machines} />
        </div>
      </div>

      {/* The Best Place Online for CPAP Machines,*/}
      <div className="bg-[#F3F4F8] mt-20">
        <div className="lg:px-16 md:px-10 px-8 grid justify-center items-center pt-20">
          <div className=" grid justify-center items-center">
            <p className=" text-center font-bold font-lora lg:text-[30px] md:text-[30px] text-[20px] lg:w-[800px] md:w-[800px]">
              The Best Place Online for CPAP Machines, Accessories, and
              Equipment
            </p>
          </div>

          <div className=" py-10 grid justify-center items-center">
            <BestPlaceOnline best={best} />
          </div>
        </div>
      </div>

      {/* CPAP Education */}
      <div className="lg:px-16 md:px-10 px-8 pt-20 grid gap-5 justify-center items-center">
        {/* 1 */}
        <div className=" grid gap-3">
          <p className=" text-center font-OpenSans">CPAP Market F.A.Q.</p>
          <p className="text-[30px] font-bold font-lora text-center">
            CPAP Education
          </p>
        </div>
        {/* 2 */}
        <div className=" grid gap-3">
          <p className=" font-bold font-OpenSans text-[20px] text-center">
            Q: Which machine is the quietest?
          </p>
          <p className=" font-OpenSans text-18px text-center">
            A: All new machines these days are extremely quiet...{" "}
            <span className=" text-blue-500">Read more</span>
          </p>
        </div>
        {/* 3 */}
        <div className=" grid gap-3">
          <p className=" font-bold font-OpenSans text-[20px] text-center">
            Q: What is a BiLevel (BiPAP) Machine?
          </p>
          <p className=" font-OpenSans text-18px text-center">
            A: A BiLevel machine, or as some call it a BiPAP...{" "}
            <span className=" text-blue-500">Read more</span>
          </p>
        </div>
        {/* 4 */}
        <div className=" grid gap-3">
          <p className=" font-bold font-OpenSans text-[20px] text-center">
            Q: Are there DC/Battery operated CPAP machines?
          </p>
          <p className=" font-OpenSans text-18px text-center">
            A: Most CPAP/APAP/Bipap-Vpap machine are designed to operate...{" "}
            <span className=" text-blue-500">Read more</span>
          </p>
        </div>
      </div>

      {/* Most Popular */}
      <div className="bg-[#F3F4F8] lg:px-44 md:px-10 px-8 mt-20">
        <div className=" py-20">
          <MostPopular popular={popular} />
        </div>
      </div>

      {/* Replacement Schedule */}
      <div>
        <div className=" lg:mb-0 md:mb-0 mb-8">
          <Replacement replacement={replacement} />
        </div>
      </div>

      {/* Lookling for CPAP */}
      <div className="bg-[#F3F4F8] lg:px-52 md:px-10 px-8 mb-20">
        <LookingFor looking={looking} />
      </div>

      {/* Learn More */}
      <div className=" lg:px-16 md:px-10 px-8 grid justify-center pb-10 items-center">
        <div className=" grid justify-center items-center">
          <p className=" lg:text-[30px] md:text-[30px] text-[20px] font-bold text-center lg:w-[600px] md:w-[600px]">
            Learn More About Sleep Apnea, Treatment & More
          </p>
        </div>
        <div className=" grid justify-center items-center mt-5">
          <LearnMore learn={learn} />
        </div>
      </div>

      {/* Companys */}
      <div className=" bg-[#F3F4F8]">
        <div className=" px-8 md:px-10 lg:px-16 grid justify-center items-center py-10">
          <Companys company={company} />
        </div>
      </div>

      {/* footer */}
      <div className="lg:px-16 md:px-10 px-8 ">
        <Footer />
      </div>
    </div>
  );
};

export default PageOne;
