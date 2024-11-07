import Image from "next/image";
import React from "react";
import logo from "../../public/img/logopic-2.png"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <div>
{/* ------------------------Footer Section--------------------------------------------- */}
      <section>
      <footer className="text-gray-400 btn body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Image src={logo} alt="Anas" height={100} width={70}/>
    <span className="text-3xl text-white font-bold -ml-2">NAS</span>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      © 2024 Anas — PortFolio
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://www.facebook.com/profile.php?id=61553241400280" target="_blank">
         <FaFacebook className="text-3xl text-white hover:text-blue-800"/>
      </a>
      <a href="https://www.instagram.com/itz_anas_123/" target="_blank">
         <FaInstagram className="text-3xl text-white hover:text-red-700 ml-4"/>
      </a>
      <a href="https://www.linkedin.com/in/anas-ahmed12/" target="_blank">
         <TiSocialLinkedinCircular  className="text-4xl text-white hover:text-blue-600 ml-4"/>
      </a>
      <a href="/contact" target="_blank">
         <MdOutlineMarkEmailUnread  className="text-3xl text-white hover:text-red-400 ml-4"/>
      </a>
    </span>
  </div>
</footer>

      </section>
    </div>
  );
};

export default Footer;
