import styles from "./TextBlockStyle.module.css";

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
          <h1>{item.title}</h1>
          <p className={styles.bodyText}>
            {item.body?.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i !== arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        </section>
      ))}
    </>
  );
}
