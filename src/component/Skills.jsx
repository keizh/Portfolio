import reactimage from "../assets/images/react.js-img.png";
import tailwindimage from "../assets/images/react.js-img.png";
import reduximage from "../assets/images/react.js-img.png";
import framermotionimage from "../assets/images/react.js-img.png";
import allthreeimages from "../assets/images/react.js-img.png";

function Skills() {
  return (
    <div className="SKILLS">
      <h1 className="">Skills</h1>

      <div id="react">
        <img src={reactimage} alt="" />
      </div>

      <div id="tailwind">
        <img src={tailwindimage} alt="" />
      </div>

      <div id="redux">
        {" "}
        <img src={reduximage} alt="" />
      </div>

      <div id="framer_motion">
        {" "}
        <img id="framer_motion" src={framermotionimage} alt="" />
      </div>

      <div id="allthree">
        {" "}
        <img className="allthree" src={allthreeimages} alt="" />
      </div>
    </div>
  );
}

export default Skills;
