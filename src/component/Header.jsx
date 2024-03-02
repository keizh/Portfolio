import Button from "./Button";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";

function Header() {
  const defaultWidth = 350;
  const defaultHeight = 450;
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(defaultWidth);
  const [height, setHeight] = useState(defaultHeight);

  const variants = {
    open: {
      width: width,
      height: height,
    },
    closed: {
      width: 150,
      height: 40,
    },
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 600) {
      setWidth(300);
      setHeight(420);
    } else {
      setWidth(defaultWidth);
      setHeight(defaultHeight);
    }
  }, [windowWidth]);

  return (
    <div className="header">
      <motion.div
        className="menu"
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      >
        <AnimatePresence>
          {/* to implement exit befre unmounting we are using useAnimate */}
          {isActive && <Nav isActive={isActive} setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default Header;
