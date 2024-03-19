import React from 'react'
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
  } from "@/utils/motion";
import Image from "next/image";



const About = () =>{
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-4 mt-40">
    <div className="flex flex-row gap-10">
        /* Here we will create profile photo section */
        <div className="w-24 h-24 relative overflow-hidden rounded-full shadow-lg">
            <div className='ring'>
            <Image
                src="/me.png"
                alt='me'
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full rounded-full object-cover glow"
            />
            </div>
        </div>
      
  
    
        <h1 className="text-2xl font-semibold text-white">KDR</h1>
        <p className="mt-2 text-gray-300">Arbaz</p>
      </div>
    </div>
 
  )
}

export default About