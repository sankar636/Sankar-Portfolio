import React from 'react';
import { motion } from 'motion/react';
import '../App.css';
import { GoPerson } from 'react-icons/go';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <motion.div
      className="projects"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="about" id="about">
        <div className="section-heading">
          About <span className="gradient">Me</span>
        </div>

        <div className="About-image-container">
          <img className="About-img" src="sss_photo.png" alt="Profile" />
        </div>

        <div className="About-text">
          {/* About Me */}
          <div className="About-paragraph">
            <span className="About-para-title">
              <GoPerson id="about-icon" />{' '}
              <span className="gradient"> About Me </span>
            </span>

            <span className="About-paragraph-text">
              I'm currently pursuing MCA at Odisha University of Technology and
              Research, Bhubaneswar. I’m passionate about both{' '}
              <strong className="highlight-1">SAP ABAP Development</strong> and{' '}
              <strong className="highlight-1">
                Full-Stack Web Development
              </strong>
              . I enjoy building scalable applications and learning modern
              technologies like <strong className="highlight-1">React</strong>,{' '}
              <strong className="highlight-1">Next.js</strong>,{' '}
              <strong className="highlight-1">Node.js</strong>, and{' '}
              <strong className="highlight-1">TypeScript</strong>. I’m also an{' '}
              <strong className="highlight-1">
                SAP Certified Associate - ABAP Cloud Developer
              </strong>{' '}
              and continuously improving my skills in enterprise application
              development and backend systems.
            </span>
          </div>

          {/* Current Work */}
          <div className="About-paragraph">
            <span className="About-para-title">
              <FaGraduationCap
                id="about-icon"
                style={{ verticalAlign: 'middle' }}
              />{' '}
              <span className="gradient"> What I'm doing now </span>
            </span>

            <span id="para-finish">
              I have experience in both{' '}
              <strong className="highlight-1">SAP ABAP Development</strong> and{' '}
              <strong className="highlight-1">
                Full-Stack Web Development
              </strong>
              . I have worked on SAP ABAP projects involving ALV Reports,
              SmartForms, OpenSQL, and modular application development.
              <br />
              <br />I also worked as a{' '}
              <span
                style={{
                  color: 'hsl(38 99% 58%)',
                }}
              >
                Full Stack Development
              </span>{' '}
              Intern at{' '}
              <a
                href="https://edubiznetworks.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'hsl(38 99% 58%)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span style={{ textDecoration: 'underline' }}>
                  EduBiz Networks
                </span>

                <FaExternalLinkAlt
                  size="0.8em"
                  style={{
                    verticalAlign: 'middle',
                    marginLeft: '2px',
                  }}
                />
              </a>{' '}
              from <strong>September to April</strong>, where I worked on
              developing scalable and responsive web applications using{' '}
              <strong>React</strong>, <strong>Next.js</strong>,{' '}
              <strong>Tailwind CSS</strong>, and <strong>TypeScript</strong>. My
              responsibilities included building interactive UI components,
              integrating REST APIs, working with CMS platforms and third-party
              services, and improving website performance, security, and
              usability for production-ready deployments.
              {/* Currently, I am
              building production-ready applications using React, Next.js,
              Tailwind CSS, Node.js, and modern web technologies while
              continuously improving my backend and system design skills. */}
            </span>
          </div>

          {/* Hobbies */}
          <div className="About-paragraph">
            <span className="About-para-title">
              <IoGameController
                id="about-icon"
                style={{ verticalAlign: 'middle' }}
              />{' '}
              <span className="gradient"> My Hobbies & Personal Life </span>
            </span>

            <span className="About-paragraph-text">
              I'm someone who really enjoys technology and problem-solving. In
              my free time, I like exploring new tools and frameworks. My
              hobbies include playing chess and reading books, which help me
              improve my thinking ability and learn new perspectives.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
