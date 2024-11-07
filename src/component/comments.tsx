import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div>
      <section className="text-gray-400 body-font">
        <h3 className="text-center text-xl font-bold text-black mb-2 mt-4">
          Our Tesitmonial
        </h3>
        <div className="h-1 w-16 m-auto main"></div>
        <h1 className="text-center text-3xl mt-4 mb-3 text-gray-700">
          Honourable Client Says About Me
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border1 rounded-lg" data-aos="flip-right">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border1    bg-gray-800 bg-opacity-10"
                  src="/pic11.jpeg"
                  height={500}
                  width={500}
                />
                <p className="leading-relaxed text-gray-500">
                  “Working with Him was an absolute pleasure! His expertise in
                  web development brought our vision to life in ways we couldnt
                  have imagined. Not only is he skilled in responsive design,
                  but he also has a deep understanding of user experience.
                  high-performance website that our users love. Highly recommend
                  him for anyone looking to elevate their digital presence!”
                </p>
                <div className='h-1 w-16 m-auto my-4 btn'></div>
                <h2 className="text-black font-bold title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p className="text-gray-500">Senior Web Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border1 rounded-lg" data-aos="flip-right">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border1 bg-gray-800 bg-opacity-10"
                  src="/pic22.jpg"
                  height={500}
                  width={500}
                />
                <p className="leading-relaxed text-gray-500">
                  “Anas exceeded all expectations with his web development work.
                  He took our outdated site and turned it into a fast,
                  responsive, and aesthetically pleasing platform. Hes got a
                  unique blend of technical skill and creative design sense, and
                  it shows in every part of the website. Since launching, we have
                  received nothing but compliments from our customers!”
                </p>
                <div className='h-1 w-16 m-auto my-4 btn'></div>
                <h2 className="text-black font-bold title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4 border1 rounded-lg" data-aos="flip-right">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border1 bg-gray-800 bg-opacity-10"
                  src="/pic3.jpeg"
                  height={500}
                  width={500}
                />
                <p className="leading-relaxed text-gray-500">
                  Anas has an innate talent for creating websites that not only
                  look great but also perform exceptionally well. His
                  responsiveness to feedback and willingness to iterate on
                  designs are commendable. He is always up to date with the
                  latest technologies,Anas is undoubtedly one of the best web
                  developers I have had the pleasure of working with.
                </p>
                <div className='h-1 w-16 m-auto my-4 btn'></div>
                <h2 className="text-black font-bold title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comments;
