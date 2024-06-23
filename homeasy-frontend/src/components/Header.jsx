import { Button } from "flowbite-react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
const navList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  return (
    <>
      <header className="w-full border-b">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between sticky p-4 gap-4">
          <div className="logo text-xl sm:text-3xl">
            <Link to="/">
              <span>Hom</span>
              <span className="text-sky-400 font-poppins">easy</span>
            </Link>
          </div>
          {/* searchBar */}

          <div className="hidden md:flex items-center">
            <form className="max-w-md w-[380px]  mx-auto">
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 pe-12 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search here..."
                  required
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-3">
                  <button
                    type="submit"
                    className=" cursor-pointer hover:bg-gray-100 focus:bg-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-700 w-10 h-10 flex justify-center items-center rounded-full"
                  >
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
                {/* <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button> */}
              </div>
            </form>
          </div>

          {/* NavBar Options */}
          <div className="flex items-center gap-6">
            <ul className="hidden lg:flex items-center gap-x-4">
              {navList.map((item, index) => (
                <NavLink
                  to={item.link}
                  key={index}
                  className={({ isActive }) =>
                    `flex items-center duration-150 hover:text-blue-400 list-none cursor-pointer text-base font-medium ${
                      isActive ? "text-blue-500" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
            <div className="flex items-center cursor-pointer md:hidden">
              <CiSearch className="w-6 h-6 text-gray-500" />
            </div>
            {/* login */}

            <Button outline gradientDuoTone="purpleToBlue">
              Login
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
