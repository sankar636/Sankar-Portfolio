import React from 'react'
import { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import '../App.css'


import { GrProjects } from "react-icons/gr";
import { GoPerson } from 'react-icons/go';
import { MdEmail } from "react-icons/md";
import { HiDownload, HiHome } from "react-icons/hi";
import { SlSpeech } from "react-icons/sl";
import { FaBars } from "react-icons/fa";

const Navbar = ({ handleDownloadAndView }) => {
    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);

        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (
        <div id="fade-in3" className={`flex h-[70px] items-center justify-between w-full max-w-[1300px] fixed top-0 left-0 right-0 z-[100] mx-auto px-[10px] transition ease-in duration-300 ${scrolled ? 'scrolled' : ''}`}
        >
            <div className="nav-item">
                <span className="nav-title">  <div className="flex font-figtree font-medium text-[1.8rem] m-[10px] text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-[#e66465] hover:to-[#9198e5] hover:bg-clip-text hover:text-transparent">S<span className="logo-backtick font-black bg-gradient-to-br from-[#e66465] to-[#9198e5] bg-clip-text text-transparent transition-all duration-500 ease-in-out group-hover:bg-none group-hover:bg-clip-border group-hover:text-[#ebe5e5]">/</span>Sahu</div> </span>
            </div>
            <div className="nav-item ">
                <div className="nav-menu">

                    <span className="nav-title">
                        <a href="#top">
                            <HiHome className="nav-icon" /> Home
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#about">
                            <GoPerson className="nav-icon" /> About Me
                        </a>
                    </span>

                    <span data-tooltip-id="tooltip-1" className="nav-title">
                        <a href="#blog">
                            <SlSpeech className="nav-icon" /> Blog
                        </a>
                    </span>

                    <span className="nav-title" id="nav-projects">
                        <a href="#projects">
                            <GrProjects className="nav-icon" /> Projects
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#contact">
                            <MdEmail className="nav-icon" /> Contact
                        </a>
                    </span>

                    <span className="resume" onClick={handleDownloadAndView}>
                        <HiDownload style={{
                            fontSize: '20px',
                            marginRight: '10px',
                            verticalAlign: 'center',
                            color: 'white',
                        }} /> View my CV  </span>

                </div>
                <Tooltip
                    id="tooltip-1"
                    place="bottom"
                    content="Coming Soon!"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        color: '#e66465',
                        fontFamily: 'figtree, sans-serif'
                    }}
                />
            </div>

            <button className="nav-hamburger" onClick={() => setOpen(!isOpen)} aria-label="Toggle Menu">
                <FaBars />
            </button>


            {isOpen && (

                <div className="nav-menu-mobile">

                    <span className="nav-title">
                        <a href="#top" onClick={() => { setOpen(false) }}>
                            <HiHome className="nav-icon" /> Home
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#about" onClick={() => { setOpen(false) }}>
                            <GoPerson className="nav-icon" /> About Me
                        </a>
                    </span>

                    <span className="nav-title" id="nav-projects">
                        <a href="#projects" onClick={() => { setOpen(false) }}>
                            <GrProjects className="nav-icon" /> Projects
                        </a>
                    </span>

                    <span className="nav-title">
                        <a href="#contact" onClick={() => { setOpen(false) }}>
                            <MdEmail className="nav-icon" /> Contact
                        </a>
                    </span>

                </div>
            )}
        </div>
    )
}

export default Navbar