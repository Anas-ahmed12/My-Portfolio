import React from 'react'
import { TbFileTypeHtml } from "react-icons/tb";
import { TbFileTypeCss } from "react-icons/tb";
import { BsFiletypeJava } from "react-icons/bs";
import { TbBrandTailwind } from "react-icons/tb";
import { RiBootstrapLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";

const Skills = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-9 body-font">
  <div className="container px-5 pb-24 mt-4 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black" data-aos="flip-right">
        Skills
        <div className='h-1 w-16 m-auto main'></div>
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl -mt-2 text-gray-800">
      What Service We
      Offer For You
      </p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border p-4 rounded-lg border1">
        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center flex-shrink-0 rounded-full mr-4 border1">
         <TbFileTypeHtml  className='text-3xl text-gray-800'/>
        </div>

          <div className="flex-grow">
            <h2 className="text-black title-font font-bold">HTML</h2>
            <div className='h-4 w-[100%] bg-gray-400 rounded-lg'>
                <div className='h-4 w-[96%] rounded-lg btn'></div>
                <p className='text-end text-black font-bold'>96%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border p-4 rounded-lg border1">
        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center flex-shrink-0 rounded-full mr-4 border1">
         <TbFileTypeCss  className='text-3xl text-gray-800'/>
        </div>

          <div className="flex-grow">
            <h2 className="text-black title-font font-bold">CSS</h2>
            <div className='h-4 w-[100%] bg-gray-400 rounded-lg'>
                <div className='h-4 w-[92%] rounded-lg btn'></div>
                <p className='text-end text-black font-bold'>92%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border p-4 rounded-lg border1">
        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center flex-shrink-0 rounded-full mr-4 border1">
         <BsFiletypeJava  className='text-3xl text-black'/>
        </div>

          <div className="flex-grow">
            <h2 className="text-black title-font font-bold">Javascript/Typescript</h2>
            <div className='h-4 w-[100%] bg-gray-400 rounded-lg'>
                <div className='h-4 w-[80%] rounded-lg btn'></div>
                <p className='text-end text-black font-bold'>80%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border p-4 rounded-lg border1">
        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center flex-shrink-0 rounded-full mr-4 border1">
         <TbBrandTailwind  className='text-3xl text-gray-800'/>
        </div>

          <div className="flex-grow">
            <h2 className="text-black title-font font-bold">Tailwind CSS</h2>
            <div className='h-4 w-[100%] bg-gray-400 rounded-lg'>
                <div className='h-4 w-[70%] rounded-lg btn'></div>
                <p className='text-end text-black font-bold'>70%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border p-4 rounded-lg border1">
        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center flex-shrink-0 rounded-full mr-4 border1">
         <RiBootstrapLine  className='text-3xl text-gray-800'/>
        </div>

          <div className="flex-grow">
            <h2 className="text-black title-font font-bold">Bootstrap</h2>
            <div className='h-4 w-[100%] bg-gray-400 rounded-lg'>
                <div className='h-4 w-[85%] rounded-lg btn'></div>
                <p className='text-end text-black font-bold'>85%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border p-4 rounded-lg border1">
        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center flex-shrink-0 rounded-full mr-4 border1">
         <RiNextjsLine  className='text-3xl text-gray-800'/>
        </div>

          <div className="flex-grow">
            <h2 className="text-black title-font font-bold">Next JS</h2>
            <div className='h-4 w-[100%] bg-gray-400 rounded-lg'>
                <div className='h-4 w-[75%] rounded-lg btn'></div>
                <p className='text-end text-black font-bold'>75%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills
