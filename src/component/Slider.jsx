/* eslint-disable react/prop-types */
function Slider({ odd = "" }) {
  return (
    <div className="scroll-section">
      <div className={`top-section ${odd}`}>
        <div className="Image">
          {/* <span className="Image-name-below">Project name</span> */}
        </div>
      </div>
      <div className={`middle-section ${odd}`}>
        <div className="Image">
          {/* <span className="Image-name-below">Project name</span> */}
        </div>{" "}
        <div className="Image">
          <span className="Image-name-below">Project name</span>
        </div>
      </div>
      <div className={`bottom-section ${odd}`}>
        <div className="Image">
          {/* <span className="Image-name-above">Project name</span> */}
        </div>
      </div>
    </div>
  );
}

export default Slider;
