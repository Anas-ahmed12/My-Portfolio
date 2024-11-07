"use client"
import Image from "next/image";
// import hero2 from "../../public/img/hero-2.png";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-400 body-font h-auto mt-36 bg">
        <div className="container mx-auto flex px-6 py-12 lg:py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center -mt-16">
            <p className="text-xl text-gray-900">HEY THERE!</p>
            <h1 className="text-4xl lg:text-5xl mt-3 font-bold text">I AM</h1>
            <h1 className="text-4xl lg:text-5xl mt-3 text-black font-bold">
              <Typewriter
                options={{
                  strings: ['Web Designer', 'Web Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
                <div className="h-1 w-16 main"></div>
            </h1>
            <p className="mb-10 mt-7 text-black font-sans">
              Hello! {"I'm"} Anas, a passionate web designer with a commitment to
              delivering outstanding digital experiences. With a background in
              both design and technology, I specialize in creating visually
              captivating and highly functional websites that effectively
              represent brands and engage users. My design philosophy centers
              around a user-first approach, ensuring that every project not only
              looks aesthetically pleasing but also provides an intuitive and
              seamless experience.
            </p>

            <div className="flex justify-center">
              <a href="/project">
              <button className="inline-flex text-white border-0 py-2 px-5 lg:py-3 lg:px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-semibold btn">
                SEE MY WORK
              </button>
              </a>
            </div>
            <section className="text-gray-400 body-font w-full">
              <div className="container mt-12">
                <div className="flex flex-wrap -m-2 md:-m-4 text-center">
                  <div className="p-2 md:p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium text-xl sm:text-2xl text">
                      10
                    </h2>
                    <p className="leading-relaxed">Projects</p>
                  </div>
                  <div className="p-2 md:p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium text-xl sm:text-2xl text">
                      1.8K
                    </h2>
                    <p className="leading-relaxed">Cup of Tea</p>
                  </div>
                  <div className="p-2 md:p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium text-xl sm:text-2xl text">
                      8/10
                    </h2>
                    <p className="leading-relaxed">Average Rating</p>
                  </div>
                  <div className="p-2 md:p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium text-xl sm:text-2xl text">
                      8
                    </h2>
                    <p className="leading-relaxed">Happy Clients</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 main" data-aos="flip-right">
            <Image
              src={"/img/hero-2.png"}
              alt="hero"
              height={900}
              width={900}
              className="md:h-[700px] h-auto w-full max-w-[700px]" // Makes image responsive while keeping original size
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
