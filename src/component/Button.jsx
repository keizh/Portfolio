/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import PerceptionText from "./PerceptionText";

function Button({ isActive, setIsActive }) {
  return (
    <div className="button" onClick={() => setIsActive(!isActive)}>
      <motion.div
        className="slider"
        animate={{ y: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="elem">
          <PerceptionText title={"menu | Resume"} />
        </div>

        <div className="elem">
          <PerceptionText title={"close"} />
        </div>
      </motion.div>
    </div>
  );
}

export default Button;
