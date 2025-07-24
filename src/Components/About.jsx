import React from 'react'
import { motion } from 'motion/react'
import '../App.css'
import { GoPerson } from 'react-icons/go';
import { RiTimeLine } from "react-icons/ri";
import { IoGameController } from 'react-icons/io5';
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
            <div className='about' id='about'>
                <div className='section-heading'>About{'\u00A0'} <span className='gradient'>Me</span></div>
                <div className="About-image-container">
                    <img className="About-img" src="profileImage.jpeg" />
                </div>
                <div className="About-text">

                    <div className="About-paragraph">

                        <span className="About-para-title"> <GoPerson id="about-icon" /> <span className="gradient"> About Me </span> </span>

                        <span className="About-paragraph-text">
                            I'm currently pursuing my MCA at Odisha University of Technology and Research, Bhubaneswar. I'm passionate about developing engaging and efficient web experiences using modern tools like <strong className="highlight-1">React</strong> and <strong className="highlight-1">TypeScript</strong>. I’m always exploring new technologies and improving my skills in <strong className="highlight-1">Full-Stack Web Development</strong> to become a better problem solver and team contributor.
                        </span>

                    </div>
                    {/* <div className="About-paragraph">

                        <span className="About-para-title">  <RiTimeLine id="about-icon" /> <span className="gradient"> My Journey </span> </span>

                        <span className="About-paragraph-text">
                            My journey began when I was 16, when I learnt about the existence of HTML, CSS & JavaScript. It fascinated me that I could use DevTools to
                            go into any website's code and see how it was written. After that, I made a choice to go into the web development industry - and never looked back.
                            <span className="highlight-1"> In 2021 I completed a BTEC in Computing, and in 2024 I graduated with a BSc in Computer Science from the University of Plymouth. </span>
                        </span>
                    </div> */}
                    <div className="About-paragraph">

                        <span className="About-para-title">  <IoGameController id="about-icon" style={{ verticalAlign: 'middle' }} /> <span className="gradient"> My Hobbies & Personal Life </span> </span>

                        <span className="About-paragraph-text">
                            I'm someone who really enjoys technology. I like exploring new tools in my free time. My hobbies include playing chess and reading books, which help me relax and learn new things.
                        </span>

                    </div>

                    <div className="About-paragraph">

                        <span className="About-para-title">  <FaGraduationCap id="about-icon" style={{ verticalAlign: 'middle' }} /> <span className="gradient"> What I'm doing now </span> </span>

                        <span className="About-paragraph-text">
                            {/* Today, after graduating last year, I'm making my own projects and constantly evolving my frontend and backend skills.
                            Some of the new technologies I've been looking into include <span className="highlight-1">GraphQL and libraries like React-DnD and GSAP.</span>
                            <br></br>
                            <br></br> */}
                            <span className="gradient" id="para-finish">I'm working on a few projects, including this website, my blog, Hotel-Booking Website and more.  </span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About