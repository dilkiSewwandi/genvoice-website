import React from 'react';

const AboutSection = () => {
    return (
        <section className="mt-7">
            <h1 className="text-5xl font-bold mt-20 mb-6">About Me</h1>

            {/* Education Section */}
            <h5 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Education
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h1 className="text-xl font-semibold mb-1">Bachelor&apos;s Degree</h1>
                    <p className="italic mb-3">University of Colombo</p>
                    <p>2022-2025</p>
                </div>

                {/* Right Column for BSc. in Computer Science */}
                <div className="flex">
                    <div className="border-l-2 border-solid border-gray-400 h-full"></div>
                    <div className="pl-4">
                        <h1 className="text-xl font-semibold mb-3">BSc. in Computer Science</h1>
                        <p className="text-justify mb-3">
                            Bachelor of Science in Computer Science at University of Colombo School of Computing.
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className="text-xl font-semibold mb-1 mt-5">School Education</h1>
                    <p className="italic mb-3">Sujatha Vidyalaya, Matara</p>
                    <p>2012-2020</p>
                </div>

                {/* Right Column for Secondary Education */}
                <div className="flex">
                    <div className="border-l-2 border-solid border-gray-400 h-full"></div>
                    <div className="pl-4">
                        <h1 className="text-xl font-semibold mb-3 mt-5">Secondary Education</h1>
                        <p className="text-justify mb-3">
                            Passed General Certificate of Education Exams; Ordinary Level Exam with 9 A passes and Advanced Level with 1 A pass and 2 B passes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <h5 className="text-4xl font-bold mb-10 mt-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Experience
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h1 className="text-xl font-semibold mb-1">User Interface Designer (Part-time)</h1>
                    <p className="italic mb-3">CBM Pharmaceuticals Ltd</p>
                    <p>February 2024 - Present</p>
                </div>

                {/* Right Column for UI Designer Description */}
                <div className="flex">
                    <div className="border-l-2 border-solid border-gray-400 h-full"></div>
                    <div className="pl-4">
                        <p className="text-justify mb-3">
                            Designing Interactive Web Interfaces for the official website of CBM Pharmaceuticals Ltd using Figma.
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className="text-xl font-semibold mb-1 mt-5">Research Assistant</h1>
                    <p className="italic mb-3">Colombo HCI Lab </p>
                    <p>March 2024 - September 2024</p>
                </div>

                {/* Right Column for Research Assistant Description */}
                <div className="flex">
                    <div className="border-l-2 border-solid border-gray-400 h-full"></div>
                    <div className="pl-4">
                        <p className="text-justify mb-3">
                            Collaboration with international researchers from Open University UK and UCSC, exploring the Effect of Labeling AI-Generated Content—Deepfakes in Social Media.
                            <br></br><br />Supervised by Dr. Dilrukshi Gamage
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
