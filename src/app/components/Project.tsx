/*import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Cart from './Cart'
import Link from 'next/link'
const data =[
  {
    id:0,
    title:"Todo List",
    desc:"Areact & Typescript based app for managing and organizing",
    img:"/project-1.jpg",
    tags:["React","Node","CSS","Typescript","HTML"]
  },
  {
    id:1,
    title:"Countdown Timer",
    desc:"A next js & Typescript based app for traking app",
    img:"/project-2.jpg",
    tags:["Next.js","Node","CSS","Typescript","HTML"]
  },
  {
    id:2,
    title:"Wheater Widget",
    desc:"Areact & Typescript based app for managing and organizing",
    img:"/project-3.jpg",
    tags:["React","Node","CSS","Typescript","HTML"]
  },
  {
    id:3,
    title:"Currency Converter",
    desc:"Areact & Typescript based app for managing and organizing",
    img:"/project-4.jpg",
    tags:["Next js","Node","CSS","Typescript","HTML"]
  },
  {
    id:4,
    title:"Resume Builder",
    desc:"Areact & Typescript based app for managing and organizing",
    img:"/project-5.jpg",
    tags:["Next js","Node","CSS","Typescript","HTML"]
  },
  {
    id:5,
    title:"A Simple Calculator",
    desc:"Areact & Typescript based app for managing and organizing",
    img:"/project-6.jpg",
    tags:["Next js","Node","CSS","Typescript","HTML"]
  }
]
const Project = () => {
  return (
    <div id="project" className="container pt-32">
      <Heading title="My Projects"/>
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
{data.map((el)=> (<Cart
key={el.id}
title={el.title}
desc={el.desc}
img={el.img}
tags={el.tags}
/>))}
      </div>
    </div>
  )
}

export default Project*/

import React from 'react';
import Heading from './Heading';
import Cart from './Cart';

const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "A React & TypeScript-based app for managing and organizing tasks.",
    img: "/project-1.jpg",
    tags: ["React", "Node", "CSS", "TypeScript", "HTML"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A Next.js & TypeScript-based app for tracking deadlines.",
    img: "/project-2.jpg",
    tags: ["Next.js", "Node", "CSS", "TypeScript", "HTML"],
  },
  {
    id: 2,
    title: "Weather Widget",
    desc: "A React & TypeScript-based app for displaying weather information.",
    img: "/project-3.jpg",
    tags: ["React", "Node", "CSS", "TypeScript", "HTML"],
  },
  {
    id: 3,
    title: "Currency Converter",
    desc: "A React & TypeScript-based app for converting currency.",
    img: "/project-4.jpg",
    tags: ["Next.js", "Node", "CSS", "TypeScript", "HTML"],
  },
  {
    id: 4,
    title: "Resume Builder",
    desc: "A React & TypeScript-based app for creating professional resumes.",
    img: "/project-5.jpg",
    tags: ["Next.js", "Node", "CSS", "TypeScript", "HTML"],
  },
  {
    id: 5,
    title: "A Simple Calculator",
    desc: "A React & TypeScript-based app for performing basic calculations.",
    img: "/project-6.jpg",
    tags: ["Next.js", "Node", "CSS", "TypeScript", "HTML"],
  },
];

const Project = () => {
  return (
    <div id="project" className="container pt-32 px-4">
      {/* Heading */}
      <Heading title="My Projects" data-aos="zoom-in-right" />

      {/* Project Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {data.map((el) => (
          <Cart
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;

