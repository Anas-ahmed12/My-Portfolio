import Image from "next/image";
import pic3 from "../../../public/img/pic2-removebg-preview.png";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Page = () => {
  return (
    <div>
      <section className="text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-36">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 main " data-aos="flip-right">
            <Image
              className="object-cover object-center rounded h-[600px]"
              alt="hero"
              src={pic3}
              height={500}
              width={500}
            />
            {/* 14.2.16 */}
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className=" text-gray-900">
              ABOUT ME
              <div className="h-1 w-16 main"></div>
            </h3>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black mt-12">
              <span className="text">Web</span> Desinger And
              <br className="hidden lg:inline-block" />
              developer
              <div className="h-1 w-16 main"></div>
            </h1>
            <p className="mb-8 mt-2 font-medium">
              As a proud resident of Pakistan, {"I’m"} excited to bring
              innovative ideas to the global web development scene and
              contribute meaningfully to the world of AI. Whether {"it’s"}{" "}
              collaborating on a new project, enhancing my portfolio, or
              tackling challenging problems, {"I’m"} ready to make a lasting
              impact and connect with like-minded individuals.
              <br />
              <br />
              With a focus on responsive, user-centered design, I specialize in
              creating seamless and engaging online experiences. My skills
              include a strong command of TypeScript, Next.js, and Tailwind CSS,
              which I use to bring modern, efficient, and visually appealing
              websites to life. I am always eager to learn new tools, keep up
              with the latest trends, and further my skills in the tech
              industry.
            </p>
            <div className="flex justify-center">
              <a href="/Modern Minimalist CV Resume.pdf" target="_blank">
                <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg btn">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* // ---------------------------part-2----------------------------------------------// */}

      <section className="container mx-auto flex justify-center text-gray-400 body-font lg:-mt-24">
        <div className="flex px-5 py-24 md:flex-row flex-col items-center justify-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-16">
            <h1 className="title-font sm:text-4xl text-3xl mb-7 font-bold text-black uppercase mt-10" data-aos="fade-up-left">
              <span className="text">{"let’s"}</span> Introduce
              <br className="hidden lg:inline-block" />
              About myself
              <div className="h-1 w-16 main"></div>
            </h1>
            <p className="mb-10 leading-relaxed font-medium">
              Hello! Anas Here, a passionate web developer from the beautiful
              country of Pakistan. At 19, {"I'm "}deeply invested in advancing my
              skills in web development and am also exploring the field of
              artificial intelligence. I take pride in crafting innovative,
              responsive, and user-friendly websites. Driven by curiosity and a
              commitment to staying ahead in tech, I aim to create digital
              experiences that resonate with users and meet modern standards.
            </p>
            <h1 className="font-bold text-black flex mb-4">
              NAME <p className="text-black pl-8">: Anas</p>
            </h1>
            <h1 className="font-bold text-black flex mb-4">
              AGE <p className="text-black pl-12"> : 19</p>
            </h1>
            <h1 className="font-bold text-black flex mb-4">
              COUNTRY : <p className="text-black pl-3">Pakistan</p>
            </h1>
            <h1 className="font-bold text-black flex mb-5">
              PASSCOD <p className="text-black pl-2">: 9400</p>
            </h1>
            <span className="inline-flex   sm:mt-0  justify-start sm:justify-start">
              <a href="https://www.facebook.com/profile.php?id=61553241400280" target="_blank">
                <FaFacebook className="text-3xl text-blue-800" />
              </a>
              <a href="https://www.instagram.com/itz_anas_123/" target="_blank">
                <FaInstagram className="text-3xl text-red-700 ml-4" />
              </a>
              <a href="https://www.linkedin.com/in/anas-ahmed12/" target="_blank">
                <TiSocialLinkedinCircular className="text-3xl text-blue-600 ml-4" />
              </a>
              <a href="/contact" target="_blank">
                <MdOutlineMarkEmailUnread className="text-3xl text-red-400 ml-4 mb-10" />
              </a>
            </span>

            <div className="flex justify-center">
              <a href="/Modern Minimalist CV Resume.pdf" target="_blank">
                <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none font-bold rounded text-lg btn">
                  HIRE ME
                </button>
              </a>
              <a href="/project">
              <button className="ml-4 inline-flex border1 text bg-transparent border-2 py-2 px-6 focus:outline-none rounded text-lg font-bold">
                PROJECT
              </button>
              </a>
            </div>
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

export default Page;
