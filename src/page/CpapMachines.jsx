import React from "react";
import Frame9 from "../asset/Frame9.png";
import SleepApnea from "../component/SleepApnea";
import CpapMachine from "../component/CpapMachines";
import imag1 from "../asset/Imagesone.png";
import Image23 from "../asset/image23.png";
import img2 from "../asset/Imagestwo.png";
import img3 from "../asset/Imagesthree.png";
import img4 from "../asset/Imagefour.png";
import img5 from "../asset/Imagesfive.png";
import img6 from "../asset/Imagessix.png";
import Companys from "../component/Companys";
import Footer from "../component/Footer";
import Group1 from "../asset/Group1.png";
import Group2 from "../asset/Group2.png";
import Group3 from "../asset/Group3.png";
import Group4 from "../asset/Group4.png";
import Group5 from "../asset/Group5.png";
import Group6 from "../asset/Group6.png";
import Group7 from "../asset/Group7.png";
import Group8 from "../asset/Group8.png";
import Group9 from "../asset/Group9.png";
import MostPopular from "../component/MostPopular";
import BestPlaceOnline from "../component/BestPlaceOnline";
import Frame1 from "../asset/Frame1.png";
import Frame2 from "../asset/Frame2.png";
import Frame3 from "../asset/Frame3.png";
import Frame4 from "../asset/Frame4.png";

const CpapMachines = () => {
  // Sleep
  const sleep = [
    {
      id: 1,
      img: Frame9,
      title: "CPAP Machine for sleep Apnea",
      text: "Search for all available medicine types as well as machine access and replacement parts below.",
    },
  ];

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
    {
      id: 7,
      img: Image23,
      text: "Category Link",
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

  // Best place Online
  const best = [
    {
      id: 1,
      image: Frame1,
      text: "Manual",
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
      text: "Auto",
      description: "Ground shipping to 48 contiguous US states only",
    },
  ];

  return (
    <div className="  ">
      <div className=" bg-[#F3F4F8] lg:px-16 md:px-10 px-8 lg:pt-0 md:pt-0 pt-20">
        <SleepApnea sleep={sleep} />
      </div>
      {/* CpapMachines */}
      <div className="lg:px-16 md:px-10 px-8 py-10">
        <CpapMachine machines={machines} />
      </div>

      {/* Most Popular */}
      <div className="bg-[#F3F4F8] lg:px-44 md:px-10 px-8 mt-10">
        <MostPopular popular={popular} />
      </div>

      <div className=" py-10 lg:px-16 md:px-10 px-8">
        <div className=" grid justify-center items-center">
          <p className=" lg:text-[30px] md:text-[30px] py-5 text-[20px] text-center lg:w-[800px] font-bold font-lora">
            Different Types of Sleeping Apnea Medicine
          </p>
          <p className=" font-OpenSans lg:w-[800px] text-center">
            There are various medications prescribed for different types of
            sleep apnea. Continuous Positive Airway Pressure (CPAP) machines
            deliver a steady stream of air, while BiPAP adjusts pressure levels.
            Medications like Modafinil help combat daytime sleepiness, and
            oxygen therapy aids those with low blood oxygen levels. Treatment
            depends on the specific diagnosis.
          </p>
        </div>
        <div className=" grid justify-center items-center pt-5">
          <BestPlaceOnline best={best} />
        </div>
      </div>

      {/* Sleep apnea */}

      <div className=" lg:py-0 md:py-0 py-10 bg-[#F3F4F8] mt-20">
        <div className=" lg:flex md:flex grid justify-center items-center lg:pl-44 md:px-10 lg:pr-0 px-8  mt-10 ">
          <div className=" lg:w-2/5 md:w-2/5 w-full ">
            <p className=" font-bold font-lora lg:text-[30px] md:text-[20px] text-[20px]">
              Sleep apnea is a potentially serious sleeping disorder.
            </p>
            <p className=" pt-5">
              Sleep apnea is a potentially serious sleeping disorder
              characterized by interrupted breathing during sleep. The two
              primary types, obstructive and central sleep apnea, result in
              oxygen deprivation and fragmented sleep patterns. Common symptoms
              include loud snoring, abrupt awakenings, and daytime fatigue.
            </p>
          </div>
          <div className="lg:mt-0 md:mt-0 mt-10  lg:w-3/5 md:w-3/5 w-full grid lg:justify-end">
            <img
              className=" lg:h-[400px] lg:w-full 2xl:h-auto 2xl:w-auto"
              src={require("../asset/Neurology.jpeg")}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* What Do you need */}
      <div className=" lg:py-0 md:py-0 py-10 lg:flex md:flex grid lg:pl-0 lg:pr-44 md:px-10 px-8 lg:my-0 md:my-20 my-0">
        <div className="lg:w-3/5 md:w-3/5 w-full">
          <img
            className=" lg:h-[400px] lg:w-full 2xl:h-auto 2xl:w-auto"
            src={require("../asset/hospitalstock.jpeg")}
            alt=""
          />
        </div>
        <div className="lg:mt-0 md:mt-0 mt-10  lg:w-2/5 md:w-2/5 w-full grid justify-center items-center lg:pl-10 md:pl-5">
          <div>
            <p className="  font-bold font-lora lg:text-[30px] md:text-[20px] text-[20px]">
              What Do you need?
            </p>
            <p>
              Patients experiencing symptoms of sleep apnea should proactively
              communicate with their healthcare provider. Openly discuss sleep
              patterns, snoring intensity, and any observed episodes of
              interrupted breathing during sleep. Detailing daytime fatigue,
              morning headaches, or difficulty concentrating is crucial for an
              accurate diagnosis.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* What can we offer to you? */}

      <div className=" bg-[#F3F4F8] lg:py-0 md:py-0 py-10 mb-10">
        <div className=" lg:flex md:flex grid justify-center items-center lg:pl-44 md:px-10 lg:pr-0 px-8  mb-10 ">
          <div className=" lg:w-2/5 md:w-2/5 w-full ">
            <p className=" font-bold font-lora lg:text-[30px] md:text-[20px] text-[20px]">
              What can we offer to you?
            </p>
            <p className=" lg:pt-5 md:pt-2 pt-5">
              CPAP Market. We can provide tailored solutions to meet your
              specific needs. From personalized consultations and expert advice
              to a range of services and products, our offerings are designed to
              address your unique requirements. Trust us to deliver quality,
              reliability, and support, ensuring your satisfaction and success.
            </p>
            <button className=" lg:mt-10 md:mt-5 mt-10 rounded-3xl bg-[#F0592A] w-[200px] h-[50px] text-white hover:scale-105 hover:transition hover:duration-300 ease-in">
              Chose a Device
            </button>
          </div>
          <div className=" lg:mt-0 md:mt-0 mt-10 lg:w-3/5 md:w-3/5 w-full grid lg:justify-end">
            <img
              className=" lg:h-[400px] lg:w-full 2xl:h-auto 2xl:w-auto"
              src={require("../asset/Young man.jpeg")}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Stay in touch with CPAP Market */}
      <div className=" px-8 grid justify-center items-center pb-10">
        <div>
          <p className="font-bold font-lora lg:text-[30px] md:text-[20px] text-[20px] text-center">
            Stay in touch with CPAP Market
          </p>
          <p className=" text-center font-OpenSans">
            Be the first to know about our News and Great Deals
          </p>
          <div className="">
            <div className=" flex items-center pt-4">
              <input
                className="lg:w-[300.92px] pl-2 pr-20 h-[45px] rounded-full relative lg:left-20 md:left-20 left-8 border-2 border-gray-400 bg-white text-black"
                placeholder="Enter your text"
                type="text"
              />
              <button className=" lg:relative md:relative absolute lg:right-[75px] md:right-[75px] right-auto lg:left-auto md:left-auto left-[220px] hover:scale-105 duration-300 ease-in  lg:w-[150px] md:w-[150px] w-[110px] h-[35px] text-[#FFFFFF] bg-[#F0592A] rounded-full font-OpenSans">
                Sigh Up
              </button>
            </div>
          </div>
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

export default CpapMachines;
