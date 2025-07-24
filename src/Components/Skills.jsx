import { useState, useEffect } from 'react';
import { SiCplusplus, SiExpress, SiGraphql, SiJavascript, SiNodedotjs, SiVite } from "react-icons/si";
import { LuPalette } from "react-icons/lu";
import { FaReact, FaServer } from "react-icons/fa";
import { TbApi, TbBrandFramerMotion, TbBrandGraphql } from "react-icons/tb";
import { LinearProgress } from '@mui/material';
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";
import '../App.css'

function Skills() {

    const [active, setActive] = useState(0);
    //diff pages
    const SkillSection = ["Frontend", "Backend", "Other"];
    const icons = [<LuPalette style={{ marginRight: '10px' }} />, <FaServer style={{ marginRight: '10px' }} />, < TbBrandGraphql style={{ marginRight: '10px', verticalAlign: 'center' }} />]

    // function to animate the progressbars 
    // - basically just stalls the fill up animation to make it slower, giving the illusion of animation.
    function AnimateProgressbar({ value, ...props }) {
        const [animate, setAnimate] = useState(0);

        useEffect(() => {

            if (animate < value) {

                const timer = setTimeout(() => setAnimate(animate + 2), 10);
                return () => clearTimeout(timer);
            }

        }, [animate, value]);
        return <LinearProgress variant="determinate" className="progress-bar" value={animate} {...props}
            sx={{
                '& .MuiLinearProgress-bar': {
                    backgroundImage: 'linear-gradient(to right, #ffffff, #e66465)',
                },
            }}
        />
    }

    return (

        <motion.div
            className="skills"
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >

            <div className="skills">

                <span className="section-heading">My{"\u00A0"}<span className="gradient">Skills</span> </span>
                <span className="section-sub-heading">A list of all the skills and tech I'm familliar with. I'm especially capable at front-end development. </span>

                <div className="skills-tabs">
                    {SkillSection.map((section, index) => (

                        <button
                            key={section}
                            className={active === index ? "active" : ""}
                            onClick={() => setActive(index)} // for fronted -> 0, backend -> 1 and others -> 2
                        >
                            {icons[index]}
                            {section}
                        </button>
                    ))}
                </div>

                <div className="skills-container">

                    {active === 0 &&
                        <div className="Frontend-skills">

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <FaHtml5 className="skill-icon" />
                                    <SiCsswizardry className="skill-icon" />
                                    <span className="skills-title"> HTML/CSS </span>
                                </div>

                                <div className="progress-container">
                                    <AnimateProgressbar value={100} />
                                    <div className="Progress-value"> 100 % </div>
                                </div>
                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiJavascript className="skill-icon" />
                                    <span className="skills-title"> JavaScript </span>
                                </div>

                                <div className="progress-container">
                                    <AnimateProgressbar value={80} />
                                    <div className="Progress-value"> 80 % </div>
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiTypescript className="skill-icon" />
                                    <span className="skills-title"> TypeScript </span>
                                </div>

                                <div className="progress-container">
                                    <AnimateProgressbar value={50} />
                                    <div className="Progress-value"> 50 % </div>
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <FaReact className="skill-icon" />
                                    <span className="skills-title"> React </span>
                                </div>

                                <div className="progress-container">
                                    <AnimateProgressbar value={70} />
                                    <div className="Progress-value"> 70 % </div>
                                </div>


                            </div>
                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <FaFigma className="skill-icon" />
                                    <span className="skills-title"> Figma </span>
                                </div>

                                <div className="progress-container">
                                    <AnimateProgressbar value={30} />
                                    <div className="Progress-value"> 30 % </div>
                                </div>


                            </div>

                        </div>
                    }

                    {active === 1 &&
                        <div className="Backend-skills">

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiMongodb className="skill-icon" />
                                    <span className="skills-title"> MongoDB </span>
                                </div>

                                <div className="progress-container">
                                    <AnimateProgressbar value={50} />
                                    <div className="Progress-value"> 50 % </div>
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiNodedotjs className="skill-icon" />
                                    <span className="skills-title"> NodeJs </span>
                                </div>

                                <div className="progress-container">
                                    <AnimateProgressbar value={50} />
                                    <div className="Progress-value"> 50 % </div>
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">

                                    <SiExpress className="skill-icon" />
                                    <span className="skills-title"> Express </span>
                                </div>

                                <div className="progress-container">
                                    <AnimateProgressbar value={50} />
                                    <div className="Progress-value"> 50 % </div>
                                </div>

                            </div>
                        </div>
                    }

                    {active === 2 &&
                        <div className="Other">

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <SiCplusplus className="skill-icon" />
                                    <span className="skills-title"> C++ </span>
                                </div>

                                <div className="progress-container">
                                    <AnimateProgressbar value={80} />
                                    <div className="Progress-value"> 80 % </div>
                                </div>

                            </div>

                            <div className="skill-item">
                                <div className="skill-sub-item">
                                    <TbApi className="skill-icon" />
                                    <span className="skills-title"> REST API </span>
                                </div>

                                <div className="progress-container">
                                    <AnimateProgressbar value={80} />
                                    <div className="Progress-value"> 80 % </div>
                                </div>

                            </div>

                        </div>
                    }

                </div>

            </div >
        </motion.div>
    )
}

export default Skills;