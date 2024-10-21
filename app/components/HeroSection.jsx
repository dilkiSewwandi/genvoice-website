"use client";

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-white mb-4 text-4xl sn:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                            Hello, I&apos;m{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Dilki Sewwandi',
                                1000,
                                // 'Software Developer',
                                // 1000,
                                // 'Research Enthusiast',
                                // 1000,
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        I am a passionate Software Developer and Research Enthusiast from Sri Lanka with a deep interest in Artificial Intelligence (AI), Human-Computer Interaction (HCI), and Software Engineering. My experience spans frontend development with Next.js and React, backend technologies such as Spring Boot, and working on collaborative projects that bring real-world applications to life.
                        <br /><br />

                        My recent research explores the Effect of Labeling AI-Generated Content—Deepfakes in Social Media. This research delves into the ethical, technological, and policy-related challenges of AI, which I find crucial in today&apos;s digital age.
                        <br /><br />

                        Throughout my journey, I have actively participated in hackathons, ideathons, and research projects, driven by a curiosity about how technology can positively impact people&apos;s lives and empower communities. I seize every valuable opportunity through hard work and dedication, always striving to make the most of my experiences.
                        <br /><br />

                        In addition to my technical expertise, I am a strong team player and leader. As Industry Engagement Lead of the IEEE Student Branch of UCSC, and holding various roles in organizations like AIESEC and Rotaract, I have developed leadership and decision-making skills, ensuring successful collaborations and innovative outcomes.
                        I am always eager to learn and grow, applying my skills to solve real-world problems. I believe in the power of technology to create meaningful change, and I strive to ensure that innovations are inclusive, ethical, and equitable.
                    </p>

                    <div>
                        <a href="/images/Resume_Sewwandi.pdf" download>
                            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mt-3'>
                                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                            </button>
                        </a>
                    </div>


                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
