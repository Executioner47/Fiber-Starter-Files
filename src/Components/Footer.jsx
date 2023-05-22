import React from "react";

function Footer() {
  return (
    <footer className="-bg--clr-light-gray ">
      <div className="container px-4 md:px-3 xl:px-48 m-auto text-center md:text-left">
        <div className="grid gap-8 px-4 py-6 justify-center lg:py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-xl font-bold">Fiber</h2>
            <ul className="text-black font-medium">
              <li className="mb-4">
                With Fiber, you can setup your own personal portfolio in minutes
                with dozens of premade, beautiful templates.
              </li>
              <li className="mb-4">Made with &#10084; in the Netherlands.</li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h2 className="mb-6 text-xl font-bold">Sitemap</h2>
            <ul className="text-black font-medium">
              <li className="mb-4 group transition duration-300 w-fit">
                <a href="#Community" className="group-hover:-text--clr-primary">
                  Community
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mb-4 group transition duration-300 w-fit">
                <a href="#Pricing" className="group-hover:-text--clr-primary">
                  Pricing
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mb-4 group transition duration-300 w-fit">
                <a
                  href="#Testimonials"
                  className="group-hover:-text--clr-primary"
                >
                  Testimonials
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mb-4 group transition duration-300 w-fit">
                <a href="#Features" className="group-hover:-text--clr-primary">
                  Features
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h2 className="mb-6 text-xl font-bold">Resources</h2>
            <ul className="text-black font-medium">
              <li className="mb-4 group transition duration-300 w-fit">
                <a href="#Support" className="group-hover:-text--clr-primary">
                  Support
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mb-4 group transition duration-300 w-fit">
                <a href="#Contact" className="group-hover:-text--clr-primary">
                  Contact
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mb-4 group transition duration-300 w-fit">
                <a href="#FAQ" className="group-hover:-text--clr-primary">
                  FAQ
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h2 className="mb-6 text-xl font-bold">Company</h2>
            <ul className="text-black font-medium">
              <li className="mb-4 group transition duration-300 w-fit">
                <a href="#About" className="group-hover:-text--clr-primary">
                  About
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mb-4 group transition duration-300 w-fit">
                <a href="#Customers" className="group-hover:-text--clr-primary">
                  Customers
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mb-4 group transition duration-300 w-fit">
                <a href="#Blog" className="group-hover:-text--clr-primary">
                  Blog
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h2 className="mb-6 text-xl font-bold">Portfolio</h2>
            <ul className="text-black font-medium">
              <li className="mb-4 group transition duration-300 w-fit">
                <a
                  href="#Sarah Andrews"
                  className="group-hover:-text--clr-primary"
                >
                  Sarah Andrews
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mb-4 group transition duration-300 w-fit">
                <a
                  href="#Mathew Higgins"
                  className="group-hover:-text--clr-primary"
                >
                  Mathew Higgins
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
              <li className="mb-4 group transition duration-300 w-fit">
                <a
                  href="#Janice Dave"
                  className="group-hover:-text--clr-primary"
                >
                  Janice Dave
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] -bg--clr-primary"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
