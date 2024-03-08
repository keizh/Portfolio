import linkendinimage from "../assets/images/iconmonstr-linkedin-3-32.png";

function Contactme() {
  const handleDownload = () => {
    const pdfPath = "/Resume.pdf";

    const link = document.createElement("a");

    link.href = pdfPath;

    link.setAttribute("download", "Krishna-Mulay-Resume.pdf");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  return (
    <div className="contactmepage">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/krishna-mulay-8348bb2a7/"
        style={{ textDecoration: "none" }}
      >
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
      </a>
      <button onClick={handleDownload} className="resumebutton">
        <div className="perceptiontextbtn">
          <p>Download Resume</p>
          <p>Download Resume</p>
        </div>
      </button>
    </div>
  );
}

export default Contactme;
