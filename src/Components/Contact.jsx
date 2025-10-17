import React, { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail, IoSend } from "react-icons/io5";
import { motion } from "motion/react";
import "../App.css";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = "service_aw4yq9x";
    const templateID = "template_grz4sv7";
    const publicKey = "1VqfJIAKy0PCdUPzN";
    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
      }
    );
  };

  return (
    <motion.div
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="contact" id="contact">
        <span className="section-heading"> Contact </span>

        <div className="social-bar">
          <span className="social-heading">
            {" "}
            Want to get in touch? contact me via email below, or via my socials:{" "}
          </span>

          <div className="icons">
            <a
              className="icon"
              type="text"
              href="https://www.linkedin.com/in/sankarshan636sahu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              className="icon"
              type="email"
              href="https://github.com/sankar636"
            >
              <FaGithub />
            </a>

            <a className="icon" type="text" href="mailto:jhadia7008@gmail.com">
              <IoMail />
            </a>
          </div>
        </div>

        {/* <form
                    target="_blank"
                    action="https://formsubmit.co/jhadia7008@gmail.com"
                    method="POST"
                    className="contact-form"
                    // onSubmit={() => window.location.reload()}
                >

                    <input type="text" name="Title" className="contact-input" id="title" placeholder="Title: " required>
                    </input>

                    <input name="Email" className="contact-input" id="email" placeholder="Your Email: " type="email" required>
                    </input>

                    <textarea name="Message" className="contact-input" id="message" placeholder="Your Message: " required>
                    </textarea>

                    <button type="submit" className="send-form">
                        <span> Send Message </span>
                        <IoSend style={{ margin: '10px' }} />
                    </button>

                </form> */}
        <form ref={form} onSubmit={sendEmail}
        className="contact-form"
        >
          {/* <label>Name</label> */}
          <input
            type="text"
            name="from_name" 
            required
            className="contact-input"
            placeholder="Name"
          />

          {/* <label>Email</label> */}
          <input
            type="email"
            name="from_email"
            required
            className="contact-input"
            placeholder="Email"
          />

          {/* <label>Message</label> */}
          <textarea
            name="message"
            required
            className="contact-input"
            placeholder="Your Message"
          />

          <input type="submit" value="Send Message" 
          className="send-form"
          />
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
