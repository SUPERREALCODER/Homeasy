import React, { Suspense, useState, useEffect } from "react";
import OptionCard from "../../components/OptionCard";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { serviceList } from "../../data";
const SubService = React.lazy(() => import("../../components/SubService"));

const Service = () => {
  // const location = useLocation();
  const customClass =
    "flex flex-col w-32 h-32 items-center justify-center active:border-2 rounded-md focus:border-blue-500 duration-200 hover:shadow-md cursor-pointer";
  const { category, subcategory } = useParams();
  const [selectedService, setSelectedService] = useState(null);
  // const [category, setCategory] = useState(category);
  // const [subcategory, setSubcategory] = useState(subcategory);

  useEffect(() => {
    const service = serviceList.find((item) => item.name === category);
    const subService = service?.services.find( //filter to change
      (item) => item.name === subcategory
    );
    setSelectedService(prev => subService);
  }, [category, subcategory]);

  return (
    <>
      <div className="max-w-[1280px] rounded-md mx-auto my-2 lg:mt-10 min-h-screen p-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          {/* left part */}
          <div className="md:w-[30%] flex flex-col gap-4">
            <h1 className="text-center text-4xl font-bold">{category}</h1>
            <div className="border h-fit w-full rounded-md flex flex-col gap-4 p-6">
              <h1 className="flex items-center justify-center gap-2 text-xs font-medium">
                Select a Service <div className="flex-auto border-t"></div>{" "}
              </h1>
              <div className=" p-2 grid grid-cols-2 place-items-center gap-4">
                {serviceList && serviceList
                  .find((item) => item.name === category)
                  ?.services.map((service, index) => (
                    <OptionCard
                      key={index}
                      title={service.name}
                      image={service.image}
                      customClass={customClass}
                      customClassImg={"w-20 rounded-md bg-gray-100 p-4"}
                      customClassTitle={"text-xs"}
                      onClick={() => setSelectedService(service)}
                    />
                  ))}
              </div>
            </div>
          </div>

          {/* middle part */}
          {selectedService && (
            <Suspense fallback={<Skeleton count={8} />}>
              <SubService subService={selectedService} />
            </Suspense>
          )}

          {/* right part */}
          <div className="border md:h-fit md:w-[20%] rounded-md flex flex-col items-center justify-center p-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4318/4318459.png"
              alt=""
              className="h-20 w-20 aspect-auto"
            />
            <h1 className="text-center text-gray-500">No items in your cart</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
