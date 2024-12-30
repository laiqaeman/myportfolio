"use client"


import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import "aos/dist/aos.css";
import AOS from "aos"


import { useEffect } from "react";


export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing:"ease-out-back",
      duration :1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160
    });
    AOS.refresh();

  },[])
  return (
   <div>
      <Hero/>
 <Project/>
 <Skill/>
      <About/>
     
      <Contact/>
      </div>
   
  )}
    