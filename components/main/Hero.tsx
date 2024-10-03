import React from "react";
import HeroContent from "../sub/HeroContent";
import HeroSection from "./HeroSection";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[calc(-45%)]  h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    <HeroSection/>
    </div>
  );
};

export default Hero;