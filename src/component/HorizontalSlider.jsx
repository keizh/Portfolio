import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "./Slider.jsx";

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
          <Slider />
          <Slider />
          <Slider />
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
