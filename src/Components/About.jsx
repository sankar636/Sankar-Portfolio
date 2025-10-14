import React from "react";
import { motion } from "motion/react";
import "../App.css";
import { GoPerson } from "react-icons/go";
import { RiTimeLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      className="projects"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="about" id="about">
        <div className="section-heading">
          About{"\u00A0"} <span className="gradient">Me</span>
        </div>
        <div className="About-image-container">
          <img className="About-img" src="profileImage.jpeg" />
        </div>
        <div className="About-text">
          <div className="About-paragraph">
            <span className="About-para-title">
              {" "}
              <GoPerson id="about-icon" />{" "}
              <span className="gradient"> About Me </span>{" "}
            </span>

            <span className="About-paragraph-text">
              I'm currently pursuing MCA at Odisha University of Technology and
              Research, Bhubaneswar. I'm passionate about developing engaging
              and efficient web experiences using modern tools like{" "}
              <strong className="highlight-1">React</strong> and{" "}
              <strong className="highlight-1">TypeScript</strong>. I’m always
              exploring new technologies and improving my skills in{" "}
              <strong className="highlight-1">
                Full-Stack Web Development
              </strong>{" "}
              to become a better problem solver and team contributor.
            </span>
          </div>
          <div className="About-paragraph">
            <span className="About-para-title">
              {" "}
              <IoGameController
                id="about-icon"
                style={{ verticalAlign: "middle" }}
              />{" "}
              <span className="gradient"> My Hobbies & Personal Life </span>{" "}
            </span>

            <span className="About-paragraph-text">
              I'm someone who really enjoys technology. I like exploring new
              tools in my free time. My hobbies include playing chess and
              reading books, which help me relax and learn new things.
            </span>
          </div>
          <div className="About-paragraph">
            <span className="About-para-title">
              {" "}
              <FaGraduationCap
                id="about-icon"
                style={{ verticalAlign: "middle" }}
              />{" "}
              <span className="gradient"> What I'm doing now </span>{" "}
            </span>
            <span id="para-finish">
              I am currently working as a Web Development Intern at{" "} 
              <a
                href="https://edubiznetworks.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "hsl(38 99% 58%)", display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                <span style={{ textDecoration: "underline" }}>
                  EduBiz Networks
                </span>{" "}
                <FaExternalLinkAlt
                  size="0.8em"
                  style={{ verticalAlign: "middle", marginLeft: "2px" }}
                />
              </a>
              , while also building personal projects and exploring new
              technologies.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
