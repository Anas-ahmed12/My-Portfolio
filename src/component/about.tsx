import Image from 'next/image'
import pic2 from "../../public/img/pic2-removebg-preview.png"
import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const About = () => {
  return (
    <div>
      <section className="text-gray-400 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 main" data-aos="zoom-in-left">
      <Image
        className="object-cover object-center rounded h-[600px]"
        alt="hero"
        src={pic2}
        height={500}
        width={500}
      />
      {/* 14.2.16 */}
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h3 className=' text-gray-900 text-2xl'>
        ABOUT ME
        <div className='h-1 w-16 main'></div>
    </h3>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black mt-20">
       <span className='text'> Web</span> Desinger And
        <br className="hidden lg:inline-block" />
         developer
         <div className="h-1 w-16 main"></div>
      </h1>
      <p className="mb-8 mt-2 text-gray-950 italic">
              Hello! Im Anas, a passionate web designer with a commitment to
              delivering outstanding digital experiences. With a background in
              both design and technology, I specialize in creating visually
              captivating and highly functional websites that effectively
              represent brands and engage users. My design philosophy centers
              around a user-first approach, ensuring that every project not only
              looks aesthetically pleasing but also provides an intuitive and
              seamless experience.
            </p>
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
        <a href="/Modern Minimalist CV Resume.pdf" target='_blank'>
        <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg btn">
          Download CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
