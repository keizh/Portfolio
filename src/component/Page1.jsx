import RotatingText3d from "./RotatingText3d.jsx";
import styles from "./Page1.module.css";

function Page1() {
  return (
    <div className="page1">
      <div className="page1_inner">
        <div className="center">
          <h1>Krishna Mulay</h1>
          <RotatingText3d />
          <div>
            <h1>Portfolio is made using:</h1>
            <h1>React + Gsap + Framer Motion + tailwind CSS</h1>
          </div>
        </div>
        <div className="bottom" style={{ color: "transparent" }}>
          <span
            style={{ display: "inline-block" }}
            className={`${styles.anime}`}
          >
            SLOWLY
          </span>
          <span
            style={{ display: "inline-block" }}
            className={`${styles.anime2}`}
          >
            {" "}
            -SCROLL-
          </span>
          <span
            style={{ display: "inline-block" }}
            className={`${styles.anime}`}
          >
            {" "}
            DOWN
          </span>
        </div>
      </div>
    </div>
  );
}

export default Page1;
