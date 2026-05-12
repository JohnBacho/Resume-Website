import styles from "./ULBlock.module.css";

export default function TextBlock({ Text = [] }) {
  return (
    <>
      {Text.map((item, index) => (
        <section
          key={index}
          className={styles.TextBlock}
          style={{
            paddingTop: item.PaddingTop || "70px",
            textAlign: item.textAlign || "left",
          }}
        >
          <h1>Goals & Constraints</h1>
          <p className={styles.bodyText}>
            {item.body?.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i !== arr.length - 1 && <br />}
              </span>
            ))}
          </p>
          <br></br>
          <p style={{ fontWeight: "bold" }}>Goal</p>
          <ul className={styles.ul}>
            {item.goal?.map((goalItem, goalIndex) => (
              <li key={goalIndex}>{goalItem}</li>
            ))}
          </ul>
          <br></br>
          <p style={{ fontWeight: "bold" }}>Constraints</p>
          <ul className={styles.ul}>
            {item.constraints?.map((constraintItem, constraintIndex) => (
              <li key={constraintIndex}>{constraintItem}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
