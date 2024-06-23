import React, { useState } from "react";
import Banner from "../components/Banner";
import PopUp from "../components/PopUp";
import OptionCard from "../components/OptionCard";

const serviceList = [
  {
    name: "Electrician",
    image: "https://cdn-icons-png.flaticon.com/512/4202/4202905.png",
    services: [
      {
        name: "Wiring",
        image: "https://cdn-icons-png.flaticon.com/512/2695/2695278.png",
      },
      {
        name: "Light",
        image: "https://cdn-icons-png.flaticon.com/512/187/187426.png",
      },
      {
        name: "Air Conditioner",
        image: "https://cdn-icons-png.flaticon.com/512/16479/16479248.png",
      },
      {
        name: "Fan",
        image: "https://cdn-icons-png.flaticon.com/512/3046/3046948.png",
      },
    ],
  },
  {
    name: "Plumber",
    image: "https://cdn-icons-png.flaticon.com/128/5188/5188554.png",
    services: [
      {
        name: "Drain",
        image: "https://cdn-icons-png.flaticon.com/512/12029/12029622.png",
      },
      {
        name: "Bath Fittings",
        image: "	https://cdn-icons-png.flaticon.com/512/10073/10073767.png",
      },
      {
        name: "Toilet Cleaning",
        image: "https://cdn-icons-png.flaticon.com/512/2954/2954917.png",
      },
      {
        name: "Water Connections",
        image: "https://cdn-icons-png.flaticon.com/512/12029/12029632.png",
      },
    ],
  },
  {
    name: "Painter",
    image: "https://cdn-icons-png.flaticon.com/128/1995/1995491.png",
    services: [
      {
        name: "Full Home Painting",
        image: "https://cdn-icons-png.flaticon.com/512/2850/2850408.png",
      },
      {
        name: "Partial Home Painting",
        image: "https://cdn-icons-png.flaticon.com/512/2400/2400359.png",
      },
      {
        name: "Car Painting",
        image: "https://cdn-icons-png.flaticon.com/512/887/887173.png",
      },
      {
        name: "Wall Painting",
        image: "https://cdn-icons-png.flaticon.com/512/3669/3669573.png",
      },
    ],
  },
];

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOptionClick = (item) => {
    console.log("Service selected:", item);
    setShowPopUp(true);
    setSelectedService(item);
  };

  return (
    <>
      <Banner />
      {/* overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center w-full h-full justify-center bg-[rgba(0,0,0,0.80)] duration-200 ${
          showPopUp ? "" : "hidden"
        }`}
      >
        <PopUp
          selectedService={selectedService}
          onClose={() => setShowPopUp(false)}
        />
      </div>
      <div
        className={`max-w-[1280px] mx-auto my-6 md:my-10 ${
          showPopUp ? "pointer-events-none" : ""
        }`}
      >
        <h1 className="text-2xl md:text-4xl font-medium px-4">
          Home based services
        </h1>
        <div className="md:flex items-center justify-evenly flex-wrap mt-6 md:mt-10 gap-2 grid grid-cols-2 grid-flow-row place-items-center ">
          {serviceList.map((item, index) => (
            <OptionCard
              key={index}
              title={item.name}
              image={item.image}
              onClick={() => {
                console.log(item);
                handleOptionClick(item);
              }}
              customClass="flex flex-col items-center justify-center gap-2 p-4 border cursor-pointer w-40 md:w-60 rounded-md shadow-sm duration-200 hover:shadow-md hover:bg-blue-100 active:shadow-lg"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
