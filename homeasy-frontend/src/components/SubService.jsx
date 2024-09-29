import axios from "axios";
import { Button } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import PopUp from "./PopUp";

const SubService = ({ subService }) => {
  const [user, setUser] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleBook = async () => {
    try {
      const result = await axios.get("https://homeasy.onrender.com/profile", {
        withCredentials: true,
      });
      setUser(result.data);

      if (result.data) {
        setShowPopUp(true);
        console.log("user:-", user);
      } else {
        setRedirectToLogin(true);
        console.log("user:-", user);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      setRedirectToLogin(true);
    }
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <>
      {showPopUp && (
        <>
          {/* <PopUp
                superSubService={superSubService}
                onClose={() => setShowPopUp(false)}
              /> */}
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="number" name="number" placeholder="Number" />
            <textarea name="message"></textarea>
            <button type="submit">Submit Form</button>
          </form>
        </>
      )}

      <div className="border h-auto md:h-fit md:w-2/4 flex flex-col p-6 rounded-md">
        <h1 className="text-xl md:text-3xl py-4 font-bold">
          {subService.name}
        </h1>
        {/* services component under it */}
        {subService.subServices.map((superSubService, index) => (
          <>
            {/* <div  className="flex flex-col gap-4"> */}
            <div key={index} className="flex gap-2 justify-between mb-4">
              {/* left part for the services component */}
              <div className="flex flex-col justify-between">
                <h1 className="font-bold">{superSubService.name}</h1>
                <span className="font-medium">
                  &#8377;{Number(superSubService.price)}
                </span>
                <hr />
                <ul className="list-disc list-inside text-xs md:text-normal leading-6">
                  <li>Spare part&apo;s cost not included</li>
                  <li>Flat &#8377;49 visitation fee per booking</li>
                </ul>
                <Button>View Details</Button>
              </div>
              {/* right part for the services component */}
              <div className="flex flex-col items-center justify-center gap-2 ">
                <img
                  src={superSubService.image}
                  alt={superSubService.name}
                  className="h-28 w-28 bg-gray-100 p-4 rounded-md"
                />
                <Button outline onClick={handleBook}>
                  Book
                </Button>
              </div>
            </div>
            <hr className="border-gray-200 p-2" />
            {/* </div> */}
          </>
        ))}
      </div>
    </>
  );
};

SubService.propTypes = {
  subService: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subServices: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default SubService;
