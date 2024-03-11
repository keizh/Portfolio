import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingAssets = ({ setLoader }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("no-scroll");

    const interval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
    }, 40);

    setTimeout(() => {
      clearInterval(interval);

      document.documentElement.classList.remove("no-scroll");
      setLoader(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      document.documentElement.classList.remove("no-scroll");
    };
  }, []);

  return (
    <motion.div
      className="loading-assets"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backgroundColor: "black",
      }}
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        display: "none",
        opacity: 0,
        scale: 0,
        transition: { duration: 0.5 },
      }} // Properly configured exit animation
    >
      <motion.div
        className="loading"
        style={{
          borderRadius: "50%",
          color: "white",
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
          fontSize: "40px",
          backgroundColor: "black",
          fontFamily: "Woodland",
        }}
        animate={{ scale: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
      >
        Loading Asset {progress}%
      </motion.div>
      <p
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "20px",
          marginBlock: "20px",
        }}
      >
        Web Hosting Platform Issues :
      </p>
      <p
        style={{
          color: "white",
          fontWeight: "bold",
        }}
      >
        Video Asset{" "}
        <span
          style={{
            color: "red",
            fontWeight: "bold",
          }}
        >
          SLOW
        </span>{" "}
        loading.
      </p>
      <p
        style={{
          color: "white",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "orange" }}>RESUME </span>
        download is{" "}
        <span
          style={{
            color: "red",
            fontWeight: "bold",
          }}
        >
          SLOW
        </span>
      </p>
    </motion.div>
  );
};

export default LoadingAssets;
