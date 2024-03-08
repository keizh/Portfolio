/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Slider({ data }) {
  return (
    <div className="scroll-section">
      <div className={`top-section `}>
        <a
          target="_blank"
          href={`${data[0].href}`}
          className={`Image  ${data[0].special1 ? `Special_project1` : ""}  
          ${data[0].special2 ? `Special_project2` : ""}`}
        >
          <span className="Image-name-below">{data[0].name}</span>
          <video
            style={{ height: "100%", width: "100%" }}
            src={`${data[0].url}`}
            poster={`${data[0].url}`}
            muted
            loop
            autoPlay
          ></video>
        </a>
      </div>
      <div className={`middle-section `}>
        <a
          target="_blank"
          href={`${data[1].href}`}
          className={`Image  ${data[1].special1 ? `Special_project1` : ""}  
          ${data[1].special2 ? `Special_project2` : ""}`}
        >
          <span className="Image-name-above">{data[1].name}</span>
          <video
            style={{ height: "100%", width: "100%" }}
            src={`${data[1].url}`}
            poster={`${data[1].url}`}
            muted
            loop
            autoPlay
          ></video>
        </a>{" "}
        <a
          target="_blank"
          href={`${data[2].href}`}
          className={`Image  ${data[2].special1 ? `Special_project1` : ""}  
          ${data[2].special2 ? `Special_project2` : ""}`}
        >
          <span className="Image-name-above">{data[2].name}</span>
          <video
            style={{ height: "100%", width: "100%" }}
            src={`${data[2].url}`}
            poster={`${data[2].url}`}
            muted
            loop
            autoPlay
          ></video>
        </a>
      </div>
      <div className={`bottom-section `}>
        <a
          target="_blank"
          href={`${data[3].href}`}
          className={`Image  ${data[3].special1 ? `Special_project1` : ""}  
       ${data[3].special2 ? `Special_project2` : ""}`}
        >
          <span className="Image-name-above">{data[3].name}</span>
          <video
            style={{ height: "100%", width: "100%" }}
            src={`${data[3].url}`}
            poster={`${data[3].url}`}
            muted
            loop
            autoPlay
          ></video>
        </a>
      </div>
    </div>
  );
}

export default Slider;
