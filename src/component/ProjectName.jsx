import styles from "./ProjectName.module.css";

function Name({ title, color = "white", bg = "black" }) {
  return (
    <div
      style={{ background: `${bg}`, color: `${color}` }}
      className={`${styles.box}`}
    >
      <h1>{title}</h1>
    </div>
  );
}

export default Name;
