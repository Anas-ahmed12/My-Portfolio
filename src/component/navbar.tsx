import Image from 'next/image';
import React from 'react';
import { MdOutlineMenu } from "react-icons/md";
import logopic from "../../public/img/logopic-2.png";
import { FaArrowCircleDown } from 'react-icons/fa';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div> 
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-gray-400 body-font shadow-lg z-50 main2">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center p-5">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image src={logopic} alt='ANAS' height={100} width={70} />
            <span className="text-3xl text-white font-bold -ml-2">NAS</span>
          </a>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center ml-auto">
            <Sheet>
              <SheetTrigger>
                <MdOutlineMenu className='text-4xl text-white -mt-[70px]' />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="flex flex-col">
                  <Link href={"/"} className="py-2 text font-bold nav">Home</Link>
                  <Link href={"/about"} className="py-2 text font-bold nav">About</Link>
                  <Link href={"/project"} className="py-2 text font-bold nav">Projects</Link>
                  <Link href={"/contact"} className="py-2 text font-bold nav">Contact</Link>
                  <a href="/Modern Minimalist CV Resume.pdf" target='_blank' className="py-2">
                    <button className="inline-flex items-center btn border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white font-bold">
                      Download CV
                      <FaArrowCircleDown className='ml-2' />
                    </button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <ul className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-10 text-white font-bold nav">Home</Link>
            <Link href={"/about"} className="mr-10 text-white font-bold nav">About</Link>
            <Link href={"/project"} className="mr-10 text-white font-bold nav">Projects</Link>
            <Link href={"/contact"} className="mr-10 text-white font-bold nav">Contact</Link>
          </ul>

          {/* CV Button for Medium and Large Screens */}
          <a href="/Modern Minimalist CV Resume.pdf" target='_blank' className="hidden md:block">
            <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white font-bold mt-4 md:mt-0 btn">
              Download CV
              <FaArrowCircleDown className='ml-2' />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
