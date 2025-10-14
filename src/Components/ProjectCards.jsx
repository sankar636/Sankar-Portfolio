import React from 'react'
import { LuGithub } from "react-icons/lu";
import { GoLinkExternal } from "react-icons/go";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion } from "framer-motion";

const ProjectCard = (props) => {
    const {
        title,
        mediaType,
        tags,
        src,
        description,
        link,
        github
    } = props;

    const renderMedia = () => {
        return (
            <a href={github} target="_blank" rel="noopener noreferrer">
                <img src={src ? src : null} alt={title} loading="lazy" />
            </a>
        )
    }
    return (
        <motion.div
            className="projects"
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="project-card">
                <div className={`project-image ${mediaType}`}>
                    {renderMedia()}
                </div>
                <div className="project-information">
                    <span className="project-title">
                        <div className="gradient">{title}</div>
                    </span>

                    <div className="project-tags">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="tag"
                                data-tooltip-id={`tags-tooltip-${index}`}
                                data-tooltip-content={tag.name}
                            >
                                {tag.icon}
                            </span>
                        ))}
                        {tags.map((_tag, index) => (
                            <ReactTooltip
                                key={index}
                                id={`tags-tooltip-${index}`}
                                place="bottom"
                                style={{
                                    backgroundColor: '#0f152f',
                                    color: '#e66465',
                                    fontFamily: 'figtree, sans-serif'
                                }}
                            />
                        ))}
                    </div>

                    <div className="project-text">{description}</div>

                    <div className="project-buttons">
                        <div className="project-button">
                            <a className="live-button" href={link} target="_blank" rel="noopener noreferrer">
                                <GoLinkExternal style={{ fontSize: "20px" }} />
                                <span className="button-text">Live Project</span>
                            </a>
                        </div>

                        <div className="project-button">
                            <a className="github-button" href={github} target="_blank" rel="noopener noreferrer">
                                <LuGithub style={{ fontSize: "23px" }} />
                                <span className="button-text">Github</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard