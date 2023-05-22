import React from "react";

function SecondSection() {
  return (
    <div className="container px-4 md:px-3 xl:px-48 m-auto pt-16 pb-10 md:py-24 text-center md:text-left ">
      <h3 className="text-xl -text--clr-primary font-bold">Why Fiber?</h3>
      <h1 className="text-3xl font-bold mb-16">
        A good portfolio means good <br />
        employability.
      </h1>
      <div className="features flex gap-20 flex-col md:flex-row mb-32">
        <div className="card flex-1 text-center md:text-left">
          <img src="./images/time.svg" className="m-auto md:m-0" alt="time" />
          <h3 className="font-bold my-3">Build in minutes</h3>
          <p>
            With a selection of premade templates, you can build out a portfolio
            in less than 10 minutes.
          </p>
        </div>
        <div className="card flex-1 text-center md:text-left">
          <img src="./images/code.svg" className="m-auto md:m-0" alt="code" />
          <h3 className="font-bold my-3">Add custom CSS</h3>
          <p>
            Customize your personal portfolio even more with the ability to add
            your own custom CSS styles.
          </p>
        </div>
        <div className="card flex-1 text-center md:text-left">
          <img
            src="./images/allSizes.svg"
            className="m-auto md:m-0"
            alt="allSizes"
          />
          <h3 className="font-bold my-3">Responsive</h3>
          <p>
            All Fiber templates are fully responsive to ensure the experience is
            seemless across all devices.
          </p>
        </div>
      </div>
      <div className="banner flex flex-col md:flex-row justify-center md:items-center -bg--clr-primary rounded-lg px-10 pt-20 md:pt-0">
        <article className="md:w-1/2">
          <h1 className="text-3xl font-bold text-white">
            Diversify your portfolio.
          </h1>
          <p className="text-gray-300 my-5">
            Create an even more impressive portfolio by creating case studies
            for your projects. SImply follow our step-by-step guide.
          </p>
          <button className="bg-white hover:-bg--clr-primary hover:ring-1 ring-white px-5 py-3 font-medium -text--clr-primary hover:text-white rounded-lg transition-all">
            Start Free Trial
          </button>
        </article>
        <figure className="md:w-1/2 mt-7">
          <img src="./images/PageImage.png" alt="" />
        </figure>
      </div>
      <div className="testimonials flex flex-col md:flex-row  gap-3 mt-20 select-none">
        <div className="card flex flex-col flex-1 justify-between ring-1 ring-gray-200 p-4 rounded-lg">
          <div className="header flex md:justify-start justify-center items-center ">
            <img
              src="./images/UserAvatar2.svg"
              className="mr-3"
              alt="UserAvatar1"
            />
            <div className="details leading-tight">
              <h1 className="font-bold -text--clr-primary text-lg">
                Mathew Higgins
              </h1>
              <div className="price text-sm  text-gray-400">
                $20k in revenue
              </div>
            </div>
          </div>
          <p className="text-lg leading-tight my-5">
            I have been getting a LOT of leads ever since I used Fiber's premade
            templates, now I just need to work on my case studies and I'll be
            ready to go!
          </p>
          <div className="text-center">
            <button
              className="ring-2 ring-gray-200 hover:-ring--clr-primary hover:border-0 
            transition-all rounded-xl hover:-bg--clr-primary
           -text--clr-primary hover:text-white uppercase w-full py-2.5 font-bold"
            >
              view sarah's portfolio
            </button>
          </div>
        </div>
        <div className="card flex flex-col flex-1 justify-between ring-1 ring-gray-200 p-4 rounded-lg">
          <div className="header flex md:justify-start justify-center items-center ">
            <img
              src="./images/UserAvatar1.svg"
              className="mr-3"
              alt="UserAvatar1"
            />
            <div className="details leading-tight">
              <h1 className="font-bold -text--clr-primary text-lg">
                Janice Dave
              </h1>
              <div className="price text-sm  text-gray-400">
                $30k in revenue
              </div>
            </div>
          </div>
          <p className="text-lg leading-tight my-5">
            I only just started freelancing this year and I have already made
            more than I ever made in my full-time job. The templates are just so
            amazing.
          </p>
          <div className="text-center">
            <button
              className="ring-2 ring-gray-200 hover:-ring--clr-primary hover:border-0 
            transition-all rounded-xl hover:-bg--clr-primary
           -text--clr-primary hover:text-white uppercase w-full py-2.5 font-bold"
            >
              view sarah's portfolio
            </button>
          </div>
        </div>
        <div className="card flex flex-col flex-1 justify-between ring-1 ring-gray-200 p-4 rounded-lg">
          <div className="header flex md:justify-start justify-center items-center ">
            <img
              src="./images/UserAvatar3.svg"
              className="mr-3"
              alt="UserAvatar1"
            />
            <div className="details leading-tight">
              <h1 className="font-bold -text--clr-primary text-lg">
                Sarah Andrews
              </h1>
              <div className="price text-sm  text-gray-400">
                $30k in revenue
              </div>
            </div>
          </div>
          <p className="text-lg leading-tight my-5">
            Setting up my portfolio with Fiber took no more than 10 minutes.
            Since then, my portfolio has attracted a lot of clients and made me
            more than $100k.
          </p>
          <div className="text-center">
            <button
              className="ring-2 ring-gray-200 hover:-ring--clr-primary hover:border-0 
            transition-all rounded-xl hover:-bg--clr-primary
           -text--clr-primary hover:text-white uppercase w-full py-2.5 font-bold"
            >
              view sarah's portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
