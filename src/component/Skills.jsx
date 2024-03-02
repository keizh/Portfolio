function Skills() {
  return (
    <div data-scroll-speed="2" className="SKILLS">
      <h1 className="">Skills</h1>

      <div data-scroll data-scroll-speed="2" id="react">
        {" "}
        <img src="public\react.js-img.png" alt="" />
      </div>

      <div data-scroll data-scroll-speed="1" id="tailwind">
        <img src="public\tailwind-image.jpg" alt="" />
      </div>

      <div data-scroll-speed id="redux">
        {" "}
        <img src="public\redux-logo-landscape.png" alt="" />
      </div>

      <div data-scroll-speed id="framer_motion">
        {" "}
        <img id="framer_motion" src="public\FM.png" alt="" />
      </div>

      <div data-scroll-speed id="allthree">
        {" "}
        <img className="allthree" src="public\allthree.jpg" alt="" />
      </div>
    </div>
  );
}

export default Skills;
