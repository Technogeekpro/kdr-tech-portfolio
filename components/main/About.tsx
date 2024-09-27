"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const roles = ['Flutter Developer', 'Mobile App Enthusiast', 'UI/UX Designer', 'Tech Blogger'];

const About = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-4 mt-40 bg-[#1A1A2E]">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 relative overflow-hidden rounded-full shadow-lg">
          <Image
            src="/me.png"
            alt="me"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full rounded-full object-cover glow"
          />
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-3xl font-semibold text-white">
            Arbaz KDR |{' '}
            <span className="text-[#00ADB5] animate-fade">{roles[currentRole]}</span>
          </h1>
          <p className="mt-2 text-gray-300">4 Years Experience in Flutter</p>
          <p className="mt-2 text-gray-300">
            Flutter allows for beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.
          </p>
          <p className="mt-2 text-gray-300">Advantages of Flutter:</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Fast Development</li>
            <li>Expressive and Flexible UI</li>
            <li>Native Performance</li>
          </ul>
          <p className="mt-4 text-gray-400 italic">
            &quot;The only way to do great work is to love what you do.&quot; - Arbaz KDR
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;