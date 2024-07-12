import { Button } from "flowbite-react";
import PropTypes from "prop-types";
import OptionCard from "./OptionCard";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const PopUp = ({ selectedService, onClose }) => {
  if (!selectedService) return null;
  console.log("PopUp received selectedService:", selectedService);
  return (
    <>
      <div className="absolute flex flex-col gap-4 items-center w-fit md:w-[484px] h-fit md:h-2/4 justify-evenly bg-white rounded-md shadow-lg p-4 md:p-6">
        <Button
          onClick={onClose}
          color="failure"
          outline
          className="absolute right-2 top-2"
        >
          <IoClose className="h-6 w-6" />
        </Button>
        {/* <div className="flex flex-col w-full bg-red-50"> */}
        <h1 className="text-3xl md:text-4xl font-bold">
          {selectedService.name}
        </h1>
        {/* </div> */}

        <div className=" grid grid-cols-2 gap-4">
          {selectedService ? (
            selectedService.services.map((item, index) => (
              <Link
                to={`/services/${encodeURIComponent(
                  selectedService.name
                )}/${encodeURIComponent(item.name)}`}
                key={index}
              >
                <OptionCard
                  title={item.name}
                  image={item.image}
                  customClass="flex flex-col items-center justify-center gap-2 p-2 md:p-4 border cursor-pointer w-40 rounded-md shadow-sm duration-200 hover:shadow-md hover:bg-blue-100 active:shadow-lg bg-gray-50 text-sm"
                  customClassImg={"w-20"}
                  customClassTitle={"font-normal sm:font-medium"}
                />
              </Link>
            ))
          ) : (
            <div>
              <h1>No Services</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

PopUp.propTypes = {
  selectedService: PropTypes.shape({
    name: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default PopUp;
