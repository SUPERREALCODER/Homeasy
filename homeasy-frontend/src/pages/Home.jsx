import { useState } from "react";
import Banner from "../components/Banner";
import PopUp from "../components/PopUp";
import OptionCard from "../components/OptionCard";
import { serviceList } from "../data";

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
        <div className="md:flex items-center justify-evenly flex-wrap mt-6 md:mt-10 gap-2 grid grid-cols-2 grid-flow-row place-items-center">
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
              customClassImg={"w-20 h-20"}
              customClassTitle={"font-normal sm:font-medium"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
