/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect } from "react";

import fileLocation from "../assets/files/Resume.pdf";
// animate animation is implemented as soon as the component mounts
const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
  },
  enter: (index) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.5,
      opacity: { duration: 0.25 },
      delay: 0.5 + index * 0.1,
      ease: [0.37, 0, 0.63, 1],
    },
  }),
  exit: {
    opacity: 0,
  },
};

function Nav({ isActive, setIsActive }) {
  const links = [
    { name: "Home", id: "#Home" },
    { name: "About Me", id: "#About_me" },
    { name: "Projects", id: "#Projects" },
    { name: "Skills", id: "#Skills" },
    { name: "Contact Me", id: "#Contact_me" },
    { name: "Resume", id: "#Contact_me" },
  ];

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const id_name = e.target.getAttribute("href").substring(1); // Get the ID from href
      const targetElement = document.getElementById(id_name);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    };

    const anchorClicked = document.querySelectorAll(".anchor-clicked");
    anchorClicked.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
      return () => anchor.removeEventListener("click", handleClick);
    });
  }, []);
  return (
    <div className="nav">
      {links.map((link, index) => (
        <div
          key={index}
          className="perspectivediv"
          style={{ perspective: "150px", perspectiveOrigin: "left" }}
        >
          <motion.p
            custom={index}
            variants={perspective}
            animate="enter"
            exit="exit"
            initial="initial"
            onClick={() => setIsActive(!isActive)}
          >
            <a href={`${link.id}`} className="anchor-clicked">
              {link.name}
            </a>
          </motion.p>
        </div>
      ))}
      <div
        className="perspectivediv"
        style={{ perspective: "150px", perspectiveOrigin: "left" }}
      >
        <motion.p
          custom="4"
          variants={perspective}
          animate="enter"
          exit="exit"
          initial="initial"
          onClick={() => setIsActive(!isActive)}
        ></motion.p>
      </div>
    </div>
  );
}

export default Nav;
