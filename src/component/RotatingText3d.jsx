import { useEffect, useState } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

export default function HeroBig() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let Y;

    if (windowWidth >= 786 && windowWidth < 910) {
      Y = 65;
    } else if (windowWidth >= 600 && windowWidth < 786) {
      Y = 50;
    } else if (windowWidth >= 450 && windowWidth < 600) {
      Y = 45;
    } else if (windowWidth < 450) {
      Y = 25;
    } else {
      Y = 80;
    }

    const titles = gsap.utils.toArray(".text-wrapper p");
    const tlx = gsap.timeline({ repeat: -1 });
    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      tlx.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: Y,
          rotateX: -90,
          stagger: 0.02,
        },
        "<"
      );

      tlx.to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -Y,
          rotateX: 90,
          stagger: 0.02,
        },
        "<1"
      );
    });
  }, [windowWidth]);

  return (
    <>
      <div className="hero">
        <div className="text-wrapper">
          <p>FRONTEND DEV</p>
          <p style={{ color: "red" }}>Open to work</p>
          <p>Future :FULL STACK</p>
          <p style={{ color: "orangered" }}>Interview</p>
        </div>
      </div>
    </>
  );
}
