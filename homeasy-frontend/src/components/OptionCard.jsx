import React from "react";
//  const customClass = "bg-blue-100";
const OptionCard = ({ title, image, onClick, customClass }) => {
  return (
    <>
      <div
        // className="flex flex-col items-center justify-center p-4 border cursor-pointer w-60 rounded-md shadow-sm duration-200 hover:shadow-md hover:bg-blue-100 active:shadow-lg"
        className={customClass}
        onClick={onClick}
      >
        <img src={image} alt={`${title} image`} className="w-20" />
        <h1 className="font-normal sm:font-medium ">{title}</h1>
      </div>
    </>
  );
};

export default OptionCard;
