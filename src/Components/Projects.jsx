import React from 'react';
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiOpengl, SiTypescript } from 'react-icons/si';
import { SiExpress } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

import 'react-tooltip/dist/react-tooltip.css'
import '../App.css'
import ProjectCard from './ProjectCards';

function Projects() {
    return (
        <div className="projects" id="projects">
            <span className="section-heading">
                Featured{"\u00A0"}<div className="gradient"> Projects</div>
            </span>
            <span className="section-sub-heading">
                My best and most impressive projects that I've been working on for the last year.
                <br />
                You can check them out via the links provided below.
            </span>

            <div className="project-container">
                <ProjectCard
                    title="MoCab"
                    description="MoCab is a modern cab booking platform that helps users find nearby drivers using real-time geolocation and MongoDB geospatial queries. It features secure authentication with JWT, driver and user dashboards, and a responsive UI. Built using the MERN stack with Express.js, React, and MongoDB."
                    tags={[
                        { icon: <FaReact />, name: "React" },
                        { icon: <FaJs />, name: "JavaScript" },
                        { icon: <FaNodeJs />, name: "NodeJs" },
                        { icon: <SiMongodb />, name: "MongoDB" },
                        { icon: <SiExpress />, name: "Express" },
                        { icon: <FaGoogle />, name: "Google API" },
                    ]}
                    src="MoCab.png"
                    link="https://mo-cab.vercel.app/" 
                    github="https://github.com/sankar636/MoCab" 
                />

                <ProjectCard
                    title="Hotel Booking Website"
                    description="A full-stack hotel booking platform where users can search for hotels, view details, and make reservations. It features secure authentication, user dashboards. Built using React, Node.js, Express, and MongoDB. The site is styled with Tailwind CSS and uses JWT for authentication."
                    src="Hotel-Booking.png" 
                    tags={[
                        { icon: <FaReact />, name: "React" },
                        { icon: <FaJs />, name: "JavaScript" },
                        { icon: <FaNodeJs />, name: "NodeJs" },
                        { icon: <SiExpress />, name: "Express.js" },
                        { icon: <SiMongodb />, name: "MongoDB" },
                    ]}
                    link="https://github.com/sankar636/Hotel-Booking" // replace with your live site link
                    github="https://github.com/sankar636/Hotel-Booking" // replace with your GitHub repo
                />
            </div>
        </div>
    );
}

export default Projects;
