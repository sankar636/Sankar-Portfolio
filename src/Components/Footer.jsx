import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import '../App.css'

function Footer() {

    const currentYear = new Date().getFullYear();

    return (

        <div className="footer">

            <div className="footer-item">
                <span className="gradient">Sankarshan Sahu ©{currentYear} </span>
            </div>

            <div className="footer-item">
                <span className="gradient"> Made with JavaScript , React & with lots of fun
                </span>
            </div>

            <div className="footer-item">
                <div className="footer-socials">
                    <span className="footer-icon">
                        <a href="https://www.linkedin.com/in/sankarshan636sahu">
                            <IoLogoLinkedin style={{ fontSize: '30px', paddingLeft: '10px' }} />
                        </a>
                    </span>
                    <span className="footer-icon">
                        <a href="https://github.com/sankar636">
                            <LuGithub style={{ fontSize: '30px', paddingLeft: '10px' }} />
                        </a>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Footer;