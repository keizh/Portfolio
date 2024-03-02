import reactimage from "public\react.js-img.png";
import tailwindimage from "public\tailwind-image.jpg";
import reduximage from "public\redux-logo-landscape.png";
import framermotionimage from "publicFM.png";
import allthreeimages from "publicallthree.jpg";

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
