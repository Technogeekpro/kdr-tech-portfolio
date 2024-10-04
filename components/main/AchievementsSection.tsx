"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "181",
    postfix: "+",
  },

  {
    metric: "Clients",
    value: "273",
  },
  {
    metric: "Years",
    value: "7",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row items-center">
               
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(
                    achievement.value.replace(/,/g, "")
                  )}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                />
                {achievement.postfix && (
                  <span className="ml-1">{achievement.postfix}</span>
                )}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
