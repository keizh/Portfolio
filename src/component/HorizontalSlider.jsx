import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "./Slider.jsx";

import major from "../assets/videos/major.mp4";
import minor from "../assets/videos/minor.mp4";
import Refokus from "../assets/videos/Refokus.mp4";
import Obys from "../assets/videos/Obys.mp4";
import JS1 from "../assets/videos/JS1.mp4";
import JS2 from "../assets/videos/JS2.mp4";
import JS3 from "../assets/videos/JS3.mp4";
import CSSP5 from "../assets/videos/CSSP5.mp4";
import CSSP1 from "../assets/videos/CSSP1.mp4";
import CSSP2 from "../assets/videos/CSSP2.mp4";
import CSSP3 from "../assets/videos/CSSP3.mp4";
import CSSP4 from "../assets/videos/CSSP4.mp4";

const slider1 = [
  {
    href: `https://watch-your-movie.netlify.app/`,
    url: `${major}`,
    name: "WYM",
    special1: true,
    special2: false,
  },
  {
    href: `https://item-react-manager.netlify.app/`,
    url: `${minor}`,
    name: "Item Manager",
    special1: false,
    special2: true,
  },
  {
    href: `https://refokus-framer.netlify.app/`,
    url: `${Refokus}`,
    name: "Refokus",
    special1: true,
    special2: false,
  },
  {
    href: `https://odyssey-gsap-website.netlify.app/`,
    url: `${Obys}`,
    name: "Odys Project",
    special1: false,
    special2: true,
  },
];

const slider2 = [
  {
    href: `https://kitabo-ka-ghar.netlify.app/`,
    url: `${JS1}`,
    name: "Book Website",
    special1: false,
    special2: false,
  },
  {
    href: `https://expensive-real-estate.netlify.app/`,
    url: `${JS2}`,
    name: "Real Estate Website",
    special1: false,
    special2: false,
  },
  {
    href: `https://paintoverme.netlify.app/`,
    url: `${JS3}`,
    name: "Paint",
    special1: false,
    special2: false,
  },
  {
    href: `https://dribble-inspired-4.netlify.app/`,
    url: `${CSSP5}`,
    name: "Dribble Website",
    special1: false,
    special2: false,
  },
];
const slider3 = [
  {
    href: `https://modelling-agency-premier.netlify.app/`,
    url: `${CSSP4}`,
    name: "Dribble Inspired",
    special1: false,
    special2: false,
  },
  {
    href: `https://dribble-inspired-3.netlify.app/`,
    url: `${CSSP3}`,
    name: "Dribble Inspired",
    special1: false,
    special2: false,
  },
  {
    href: `https://dribble-inspired-2.netlify.app/`,
    url: `${CSSP2}`,
    name: "Dribble Inspired",
    special1: false,
    special2: false,
  },
  {
    href: `https://dribble-inspired-1.netlify.app/`,
    url: `${CSSP1}`,
    name: "Dribble Inspired",
    special1: false,
    special2: false,
  },
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  gsap.registerPlugin(ScrollTrigger);

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
    let translateXY;

    if (windowWidth >= 1280) {
      translateXY = "-210vw";
    } else if (windowWidth >= 900) {
      translateXY = "-360vw";
    } else if (windowWidth >= 1240) {
      translateXY = "-260vw";
    } else if (windowWidth >= 1160) {
      translateXY = "-280vw";
    } else if (windowWidth >= 1000) {
      translateXY = "-320vw";
    } else if (windowWidth >= 810) {
      translateXY = "-415vw";
    } else if (windowWidth >= 735) {
      translateXY = "-473vw";
    } else if (windowWidth >= 650) {
      translateXY = "-545vw";
    } else if (windowWidth >= 582) {
      translateXY = "-620vw";
    } else if (windowWidth >= 537) {
      translateXY = "-690vw";
    } else if (windowWidth >= 500) {
      translateXY = "-760vw";
    } else if (windowWidth >= 460) {
      translateXY = "-820vw";
    } else if (windowWidth >= 440) {
      translateXY = "-860vw";
    } else if (windowWidth >= 420) {
      translateXY = "-900vw";
    } else if (windowWidth >= 392) {
      translateXY = "-970vw";
    } else if (windowWidth >= 380) {
      translateXY = "-1010vw";
    } else if (windowWidth >= 360) {
      translateXY = "-1060vw";
    } else if (windowWidth >= 350) {
      translateXY = "-1110vw";
    } else if (windowWidth >= 335) {
      translateXY = "-1170vw";
    } else if (windowWidth >= 315) {
      translateXY = "-1230vw";
    } else {
      translateXY = "-1300vw";
    }

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: translateXY,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "5000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, [windowWidth]); // Add windowWidth as a dependency

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <Slider data={slider1} />
          <Slider data={slider2} />
          `` <Slider data={slider3} />
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
