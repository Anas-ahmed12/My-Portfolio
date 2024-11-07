"use client"
import About from "@/component/about";
import Comments from "@/component/comments";
import Contact from "@/component/contact";
import Hero from "@/component/hero";
import Skills from "@/component/skills";
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos';
import { useEffect } from 'react';
import Aos from "aos";


export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    Aos.refresh();
  },[]);

  
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Comments/>
      <Contact/>
    </div>
    
  );
}
