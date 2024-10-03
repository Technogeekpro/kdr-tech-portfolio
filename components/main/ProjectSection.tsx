"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Crafting Experiences That Connect",
    image: "/images/projects/uiux.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    ctaText: "Enhance My Design",
  },
  {
    id: 2,
    title: "Front-End Build",
    description: "Turning Vision into Reality",
    image: "/images/projects/front-end.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    ctaText: "Build My Front-End",
  },
  {
    id: 3,
    title: "Complete Build (with Updates & Upgrades)",
    description: "From Concept to Continuous Growth",
    image: "/images/projects/fullstack.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    ctaText: "Launch & Upgrade My Project",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleCardClick = (title: string, image: string) => {
    const message = `Title: ${title}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+919594954543&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="market" className="mx-10 z-[100]">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Market Place
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            onClick={() => handleCardClick(project.title, project.image)}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              ctaText={project.ctaText}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;