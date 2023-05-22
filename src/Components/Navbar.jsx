import React, { useEffect, useState } from "react";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [sidebarOpen]);
  return (
    <>
      <nav className="nav bg-transparent flex items-center justify-between container px-4 xl:px-48 m-auto py-10 md:py-8">
        <div className="logo font-bold text-[23px]">Fiber</div>
        <div className="burger md:hidden block">
          {!sidebarOpen ? (
            <img
              src="./images/HamburgerMenu.svg"
              alt=""
              className="cursor-pointer"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
          ) : (
            <img
              src="./images/icon-close.svg"
              alt=""
              className="cursor-pointer"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
          )}
        </div>

        <ul className="links hidden md:flex items-center justify-between text-[16px] text-[#1D1E25]">
          <li className="mr-6 group transition duration-300">
            <a href="#Pricing" className="group-hover:-text--clr-primary">
              Community
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
            </a>
          </li>
          <li className="mr-6 group transition duration-300">
            <a href="#Product" className="group-hover:-text--clr-primary">
              Pricing
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
            </a>
          </li>
          <li className="mr-6 group transition duration-300">
            <a href="#AboutUs" className="group-hover:-text--clr-primary">
              Features
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
            </a>
          </li>
        </ul>
        <div
          className={`fixed md:hidden top-32 left-0 h-screen w-screen -bg--clr-light-gray text-black transition-transform duration-300 ease-in-out ${
            sidebarOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center text-center h-[600px]">
            <ul className="text-lg space-y-4">
              <li className="mr-6 group transition duration-300">
                <a href="#Pricing" className="group-hover:-text--clr-primary">
                  Community
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mr-6 group transition duration-300">
                <a href="#Product" className="group-hover:-text--clr-primary">
                  Pricing
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mr-6 group transition duration-300">
                <a href="#AboutUs" className="group-hover:-text--clr-primary">
                  Features
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mr-6 group transition duration-300">
                <a href="#AboutUs" className="group-hover:-text--clr-primary">
                  Features
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mr-6 group transition duration-300">
                <a href="#AboutUs" className="group-hover:-text--clr-primary">
                  Sign In
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mr-6 group transition duration-300">
                <a
                  href="#AboutUs"
                  className=" px-4 py-2 -bg--clr-primary hover:-bg--clr-light-primary transition-all text-white rounded-lg shadow-lg "
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="btns  hidden md:flex">
          <button type="btn" className="px-4 py-2 rounded-full ">
            Sign In
          </button>
          <button
            type="btn"
            className="px-4 py-2 -bg--clr-primary hover:-bg--clr-light-primary transition-all text-white rounded-lg shadow-lg "
          >
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
