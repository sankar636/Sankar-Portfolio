import { useState } from "react";
import {
  SiCplusplus,
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiNodedotjs,
  SiVite,
} from "react-icons/si";
import { LuPalette } from "react-icons/lu";
import { FaReact, FaServer } from "react-icons/fa";
import { TbApi, TbBrandFramerMotion, TbBrandGraphql } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";
import "../App.css";
import SkillItem from "./SkillItem.jsx";

function Skills() {
  const [active, setActive] = useState(0);
  //diff pages
  const SkillSection = ["Frontend", "Backend", "Other"];
  const icons = [
    <LuPalette style={{ marginRight: "10px" }} />,
    <FaServer style={{ marginRight: "10px" }} />,
    <TbBrandGraphql style={{ marginRight: "10px", verticalAlign: "center" }} />,
  ];

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
        <span className="section-heading">
          My{"\u00A0"}
          <span className="gradient">Skills</span>{" "}
        </span>
        <span className="section-sub-heading">
          A list of all the skills and tech I'm familliar with. I'm especially
          capable at front-end development.{" "}
        </span>

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
          {active === 0 && (
            <div className="Frontend-skills">
              <SkillItem
                name={"HTML/CSS"}
                progress={70}
                icons={
                  <>
                    <FaHtml5 className="skill-icon" />
                    <SiCsswizardry className="skill-icon" />
                  </>
                }
                progressValue={70}
              />
              <SkillItem
                name={"JavaScript"}
                progress={80}
                icons={<SiJavascript className="skill-icon" />}
              />
              <SkillItem
                name={"TypeScript"}
                progress={50}
                icons={<SiTypescript className="skill-icon" />}
              />
              <SkillItem
                name={"React"}
                progress={70}
                icons={<FaReact className="skill-icon" />}
              />
              <SkillItem
                name={"Figma"}
                progress={30}
                icons={<FaFigma className="skill-icon" />}
              />
            </div>
          )}

          {active === 1 && (
            <div className="Backend-skills">
              <SkillItem
                name={"MongoDB"}
                progress={50}
                icons={<SiMongodb className="skill-icon" />}
              />
              <SkillItem
                name={"NodeJs"}
                progress={50}
                icons={<SiNodedotjs className="skill-icon" />}
              />
              <SkillItem
                name={"Express"}
                progress={50}
                icons={<SiExpress className="skill-icon" />}
              />
            </div>
          )}

          {active === 2 && (
            <div className="Other">
              <SkillItem
                name={"C++"}
                progress={60}
                icons={<SiCplusplus className="skill-icon" />}
              />
              <SkillItem
                name={"REST API"}
                progress={60}
                icons={<TbApi className="skill-icon" />}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
