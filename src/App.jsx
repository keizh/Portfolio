/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Info from "./component/Basic_info";
import HorizontalSlider from "./component/HorizontalSlider";
import Page1 from "./component/Page1";
import Header from "./component/Header";
import LocomotiveScroll from "locomotive-scroll";
import Name from "./component/ProjectName";
import Skills from "./component/Skills";
import Contactme from "./component/Contactme";

function App() {
  const text1 = `Myself Krishna Mulay, a 4th-year student studying at D Y Patil Pune with a CGPA of 8.8, seeking an internship, interested in frontend development, preferably for 3-6 months, eager to learn, and ready to work.`;

  const text2 = `frontend developer, I have crafted web apps using indutry standard tools like Axios, Redux, Tailwind CSS, and utilized TMDB's database. Eager to learn, contribute, and be an asset, not a burden.`;
  useEffect(() => {
    const handleResize = () => {
      window.location.reload(); // Reload the page on window resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".APP"), // Replace with your container element
    });
  }, []);

  return (
    <div className="APP">
      {/* page 1 */}
      <div data-scroll id="Home">
        {" "}
        <Header />
        <Page1 />
      </div>
      {/* page 2 */}
      <div data-scroll id="About_me">
        <Info text={text1} />
      </div>
      <div data-scroll id="Projects">
        <Name title="Projects" />
        <HorizontalSlider />
      </div>
      <div data-scroll id="Skills">
        <Skills />
      </div>
      <div data-scroll id="Contact_me">
        <Name title="Contact me" color="black" bg="white" />
        <Info text={text2} top_space={false} below_space={false} />
        <Contactme />
      </div>
    </div>
  );
}

export default App;
