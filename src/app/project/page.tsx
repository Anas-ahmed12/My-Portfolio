import Image from "next/image";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import Project1 from "../../../public/project-1.png";
import Project2 from "../../../public/project-22.png";
import Project3 from "../../../public/project-33.png";

const Page = () => {
  return (
    <div>
      <section className="text-gray-400 body-font">
        <div className="container py-24 mx-auto flex flex-wrap mt-32">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-black">
              <span className="text">My</span> Project
              <div className="h-1 w-16 m-auto main"></div>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold text-gray-500">
              Explore my portfolio of unique digital solutions, crafted to enhance user experience and bring brand stories to life.
            </p>
          </div>

          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full relative mb-4">
              <div className="relative w-full group">
                <Image
                  alt="gallery"
                  className="w-full object-cover bg-center h-96 transition-opacity duration-300 ease-in-out group-hover:opacity-35"
                  width={500}
                  height={500}
                  src={Project1}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="text-2xl text-black font-bold title-font">
                    <span className="text">E-Commerce</span> Website
                  </h2>
                  <p className="leading-relaxed text-gray-700 font-semibold">
                    Discover my e-commerce project, crafted and stylish shopping experience.
                  </p>
                  <a href="https://ecommerce-website01.vercel.app/" target="_blank" className="mt-3 text inline-flex items-center">
                    View Project
                    <CiLocationArrow1 className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full relative">
                  <div className="relative w-full group">
                    <Image
                      alt="gallery"
                      className="w-full bg-cover h-96 transition-opacity duration-300 ease-in-out group-hover:opacity-25"
                      src={Project2}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <h2 className="text-2xl text-black font-bold title-font">
                        Portfolio 
                      </h2>
                      <p className="leading-relaxed font-semibold text-gray-700">Visit my portfolio website to discover innovative web solutions and design excellence.</p>
                      <a className="mt-3 text inline-flex items-center">
                        View Project 
                        <CiLocationArrow1 className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full relative">
                  <div className="relative w-full group">
                    <Image
                      alt="gallery"
                      className="w-full bg-cover h-96 transition-opacity duration-300 ease-in-out group-hover:opacity-25"
                      src={Project3}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <h2 className="text-2xl text-black font-bold title-font mb-2">
                      Portfolio 2
                      </h2>
                      <p className="leading-relaxed font-semibold text-gray-700">Visit my portfolio website no2 to discover innovative web solutions and design excellence.</p>
                      <a className="mt-3 text inline-flex items-center">
                        View Project 
                        <CiLocationArrow1 className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
