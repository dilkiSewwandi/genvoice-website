"use client";

import React from 'react';
import Image from 'next/image';  

const projects = [
  {
    title: "FreightHub - Freightforwarding Platform",
    description: "The creation of web and mobile application for the disruption of the traditional freight forwarding industry which empowers independent transport carriers with Heavy Goods Vehicles.",
    techStack: ["Java", "Flutter", "Next Js", "SpringBoot", "PostgreSQL"],
    imageSrc: "/images/freighthub.png", 
  },
  {
    title: "AMS - Assets and Approval Workflow Management System ",
    description: "The creation of a web application for the approval workflows and assets management of an IT department of a company from scratch.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"], 
    imageSrc: "/images/ams.jpeg",  
  },
  {
    title: "Flower Stock Exchange project",
    description: "The creation of a flower stock exchange system which facilitates the process of stock buying and selling. It  was a project assigned by the company,LSEG Sri Lanka",
    techStack: ["C++"],
    imageSrc: "/images/stock.jpeg",  
  },
  {
    title: "BlogHub- Blogging platform",
    description: "The creation of a blog site where people come together to share their thoughts and stories through writing.",
    techStack: ["React", "Express", "Node.js", "MongoDB"],
    imageSrc: "/images/blog.jpeg",  
  },
  {
    title: "Research",
    description: "Exploring the Effect of Labeling AI-Generated Content- Deepfakes in Social Media collaborating with International researchers at the Open University, UK and UCSC.",
    techStack: ["Qulatrics", "Prolific", "Canva"],
    imageSrc: "/images/research.jpeg",  
  },

];

const ProjectsSection = () => {
  return (
    <div className="py-12" id="projects">
      <h2 className="text-5xl font-bold text-white mb-10 text-left mt-20">Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
            <div className="relative h-48 w-full mb-4">
              <Image
                src={project.imageSrc}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className=" bg-purple-400 text-white text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
