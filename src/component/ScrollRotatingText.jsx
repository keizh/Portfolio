import { useEffect, useState } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";

export default function HeroSmall() {
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
    const titles = gsap.utils.toArray(".text-wrapper p");
    const tlx = gsap.timeline({ repeat: -1 });
    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      tlx.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 15,
          rotateX: -90,
          stagger: 0.02,
        },
        "<"
      );

      tlx.to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -15,
          rotateX: 90,
          stagger: 0.02,
        },
        "<1"
      );
    });
  }, [windowWidth]);

  return (
    <>
      <div className="notHero">
        <div className="text-wrapper">
          <p>scroll</p>
          <p>scroll</p>
          <p>scroll</p>
          <p>scroll</p>
          <p>scroll</p>
          <p>scroll</p>
          <p>scroll</p>
          <p>scroll</p>
          <p>scroll</p>
        </div>
      </div>
    </>
  );
}
