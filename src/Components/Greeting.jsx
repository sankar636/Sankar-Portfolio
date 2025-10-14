import { TypeAnimation } from "react-type-animation";
import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiArrowDown, HiDownload } from "react-icons/hi";

import GradientText from "./GreetingText";
import "../App.css";

const Greeting = ({ handleDownloadAndView }) => {
  return (
    <div className="greeting" id="top">
      <div className="greeting-container">
        <div className="greeting-title">
          <span className="" id="fade-in">
            Hey, I'm&nbsp;
          </span>
          <GradientText
            colors={["#e66465", "#9198e5", "#e66465", "#9198e5"]}
            animationSpeed={4}
            showBorder={false}
            className=""
          >
            Sankarshan Sahu
          </GradientText>
        </div>

        <div id="fade-in2">
          <TypeAnimation
            className="greeting-subtitle"
            sequence={[
              " Front End Developer",
              2000,
              " React Developer",
              2000,
              " Tech Enthusiast",
              2000,
            ]}
            speed={10}
            wrapper="span"
            repeat={Infinity}
          />
        </div>

        <span className="greeting-text-container" id="fade-in2">
          <span className="greeting-text">
            I am actively looking for a full-time role in web development. If
            you'd like to connect, please reach out via{" "}
            <span className="text-[#ff8a8b] inline">LinkedIn</span> or{" "}
            <span className="text-[#ff8a8b] inline">Email</span>.
          </span>
        </span>

        <div className="socials" id="fade-in3">
          <span className="resume" onClick={handleDownloadAndView}>
            <div className="social-item">
              <HiDownload
                style={{
                  fontSize: "20px",
                  marginRight: "10px",
                  verticalAlign: "center",
                  color: "white",
                }}
              />
              <span>View my CV</span>
            </div>
          </span>

          <div className="social-item">
            <span className="social-icon">
              <a
                href="https://www.linkedin.com/in/sankarshan636sahu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin
                  id="socialHover"
                  style={{
                    fontSize: "30px",
                    margin: "10px",
                    verticalAlign: "center",
                  }}
                />
              </a>
            </span>
          </div>

          <div className="social-item">
            <span className="social-icon">
              <a
                href="https://github.com/sankar636"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuGithub
                  id="socialHover"
                  style={{
                    fontSize: "30px",
                    margin: "10px",
                    verticalAlign: "center",
                  }}
                />
              </a>
            </span>
          </div>
        </div>

        {/* <div className="scroll-down-container">
          <a className="scroll-down" href="#about">
            <span className="gradient">Scroll or click to enter</span>
            <HiArrowDown
              style={{
                display: 'flex',
                fontSize: "30px",
                margin: '10px',
                justifyContent: 'center',
                verticalAlign: 'center',
              }}
            />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Greeting;
