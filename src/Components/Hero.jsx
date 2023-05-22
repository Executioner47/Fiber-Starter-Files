import React, { useState } from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <main className=" -bg--clr-light-gray">
      <Navbar />
      <section className="md:h-[675px] container px-4 md:px-3 xl:px-48 m-auto pt-2 pb-8 md:py-8  flex flex-col-reverse md:flex-row justify-center items-center">
        <article className="md:w-1/2 text-center md:text-left">
          <div className="rating flex flex-col md:flex-row justify-center md:justify-start mb-5">
            <div className="stars flex justify-center md:justify-start mr-4">
              <img src="./images/star.svg" className="mr-1" alt="" />
              <img src="./images/star.svg" className="mr-1" alt="" />
              <img src="./images/star.svg" className="mr-1" alt="" />
              <img src="./images/star.svg" className="mr-1" alt="" />
              <img src="./images/star.svg" alt="" />
            </div>
            <span>Rated 4.8/5 (243 Reviews)</span>
          </div>
          <h1 className="text-2xl md:text-[45px] font-bold mb-4 leading-tight">
            Create your own portfolio <br /> in minutes.
          </h1>
          <p>
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
          <div className="btns my-6">
            <button className="-bg--clr-primary hover:-bg--clr-light-primary text-white font-bold px-5 py-3 rounded-lg transition-all mr-3">
              Start Free Trial
            </button>
            <button className="hover:-bg--clr-primary -text--clr-primary hover:text-white font-bold px-5 py-3 rounded-lg transition-all underline hover:no-underline">
              View Examples
            </button>
          </div>
          <div className="notes flex justify-center md:justify-start">
            <div className="flex mr-3">
              <img src="./images/Checkmark.svg" className="mr-1" alt="" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex">
              <img src="./images/Checkmark.svg" className="mr-1" alt="" />
              <span>10 Free Templates</span>
            </div>
          </div>
        </article>
        <figure className="md:w-1/2 mb-10 md:mb-0 text-center">
          <img
            src="./images/hero-Illustration.png"
            className="w-2/3 md:w-full mb-5 md:m-0"
            alt=""
          />
        </figure>
      </section>
    </main>
  );
}

export default Hero;
