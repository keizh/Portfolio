import linkendinimage from "publiciconmonstr-linkedin-3-32.png";

function Contactme() {
  return (
    <a target="_blank" style={{ textDecoration: "none" }} href="#">
      <div className="contactmepage">
        <div className="contactmebutton">
          <div className="perceptiontextbtn">
            <p>
              {" "}
              <img src={linkendinimage} alt="" /> reach me
            </p>
            <p>
              {" "}
              <img src={linkendinimage} alt="" /> reach me
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Contactme;
