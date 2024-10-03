"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 mx-10 z-40 mt-40">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
              We Provide
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "iOS App Development",
                1000,
                "Web Development",
                1000,
                "Android App Development",
                1000,
                "UI/UX Designinig",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl italic font-serif">
            At <span className="font-bold">KDR Tech</span>, we blend innovation
            and expertise to deliver cutting-edge solutions. Our passion for
            technology drives us to create exceptional digital experiences that
            transform businesses and inspire growth.
          </p>
          <div>
            <Link
              href="https://wa.me/919136667294?text=Hello, I would like to get in touch with you."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 w-full sm:w-fit rounded-full mr-4 bg-blue-500 hover:bg-blue-600 text-white text-lg"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-10 lg:mt-0"
        >
          <div className="rounded-full bg-transparent w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/kdr-tech-logo.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-5 "
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
