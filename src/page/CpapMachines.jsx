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
  return (
    <div className="  ">
      <div className=" bg-[#F3F4F8] lg:px-16 md:px-10 px-8 lg:pt-0 md:pt-0 pt-20">
        <SleepApnea sleep={sleep} />
      </div>

      <div className="lg:px-16 md:px-10 px-8 py-10">
        <CpapMachine machines={machines} />
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
