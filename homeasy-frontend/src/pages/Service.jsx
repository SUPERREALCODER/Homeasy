import React from "react";
import { Button } from "flowbite-react";
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

const Service = () => {
  return (
    <>
      <div className="max-w-[1280px] rounded-md mx-auto my-2 lg:mt-10 h-screen">
        <div className="flex gap-4">
          {/* left part */}
          <div className="w-[30%] flex flex-col gap-4">
            <h1 className="text-center text-4xl font-bold">Electrician</h1>
            <div className="border h-fit w-full rounded-md flex flex-col gap-4 p-6">
              <div className=" p-2 grid grid-cols-2 place-items-center">
                {serviceList.map((service, index) => (
                  <OptionCard
                    key={index}
                    title={service.name}
                    image={service.image}
                  />
                ))}
                {/* <img
                  src="https://cdn-icons-png.flaticon.com/512/4202/4202905.png"
                  alt=""
                />

                <p className="text-center text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quod.
                </p>
                <Button className="bg-blue-500 text-white rounded-md px-4 py-2">
                  Read More
                </Button>
                <Button className="bg-blue-500 text-white rounded-md px-4 py-2">
                  Book Now
                </Button>
                <Button className="bg-blue-500 text-white rounded-md px-4 py-2">
                  View Services
                </Button> */}
              </div>
            </div>
          </div>

          {/* middle part */}
          <div className="border h-fit w-2/5 flex flex-col p-6 rounded-md">
            <h1 className="text-3xl py-4 font-bold">Wiring</h1>
            {/* services component under it */}
            <div className="flex gap-2 justify-between">
              {/* left part for the services component */}
              <div className="flex flex-col justify-between">
                <h1 className="font-bold">Socket Replacement</h1>
                <span className="font-medium">&#8377;149</span>
                <hr />
                <ul className="list-disc list-inside">
                  <li>Spare part's cost not included</li>
                  <li>Flat &#8377;49 visitation fee per booking</li>
                </ul>
                <Button>View Details</Button>
              </div>
              {/* right part for the services component */}
              <div className="flex flex-col items-center justify-center gap-2 ">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4202/4202905.png"
                  alt=""
                  className="h-32 w-32 bg-gray-100 p-4 rounded-md"
                />
                <Button outline>Add</Button>
              </div>
            </div>
          </div>
          {/* right part */}
          <div className="border h-fit w-[30%] rounded-md flex flex-col items-center justify-center p-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4318/4318459.png"
              alt=""
              className="h-20 w-20 bg-gray-100 aspect-auto"
            />
            <h1 className="text-center text-gray-500">No items in your cart</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
