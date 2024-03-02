import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function TextReveal({ text, top_space = true, below_space = true }) {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  // const text = `Myself Krishna Mulay, a 4th-year student studying at D Y Patil Pune with a CGPA of 8.8, seeking an internship, interested in frontend development, preferably for 3-6 months, eager to learn, and ready to work.`;

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 80% ",
        end: "bottom 75% ",
        // markers: true,
      },
      color: "#2A2A2A",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", function (e) {
      e.preventDefault();
      setScreenWidth(window.screenWidth);
    });

    return () => {
      window.removeEventListener("resize", function (e) {
        e.preventDefault();
        setScreenWidth(window.screenWidth);
      });
    };
  }, []);

  return (
    <>
      <div className="spacing-small"></div>
      <div className="reveal">
        <div ref={triggerRef} style={{ height: "fit-content" }}>
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setlettersRef}>
              {letter}
            </span>
          ))}
        </div>
      </div>
      {below_space && <div className="spacing"></div>}
    </>
  );
}

export default TextReveal;
