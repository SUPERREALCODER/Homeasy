// import logo from "../assets/images/logo.svg"
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const FooterSection = () => {
  return (
    <footer className=" z-10 bg-[#FAFAFA] dark:bg-[#0D121C] text-gray-800 dark:text-white border-t dark:border-none border-gray-200 dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Logo and Brand */}
          <div className="mb-4 sm:mb-0">
            <a href="#" className="flex items-center">
              {/* <img
                className="h-28 w-auto dark:invert"
                // src="https://flowbite.com/docs/images/logo.svg"
                src={logo}
                alt="LO&F Logo"
              /> */}
              <div className="w-[100px] text-2xl md:text-4xl">
                <span className="dark:text-white">Hom</span>
                <span className="text-blue-500">easy</span>
              </div>
            </a>
          </div>

          {/* Links */}
          {/* <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase mb-2 dark:text-gray-300">
              About
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                >
                  Flowbite
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                >
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div> */}

          {/* Follow Us */}
          <div className="space-y-2">
            <h1 className="text-sm font-semibold uppercase mb-2 dark:text-gray-300">
              Follow us
            </h1>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://x.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h1 className="text-sm font-semibold uppercase mb-2 dark:text-gray-300">
              Legal
            </h1>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Terms & Conditions"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Copyright and Social Icons */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Copyright &copy; Homeasy™ {new Date().getFullYear()} | All rights
            reserved
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <BsInstagram />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
