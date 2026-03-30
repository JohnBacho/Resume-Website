import styles from "./IframeStyle.module.css";

export default function Iframe({ IframeInfo }) {
  return (
    <div className={styles.IframeContainer}>
      {IframeInfo.map((item, index) => (
        <iframe
          key={index}
          src={item.src}
          title={item.title}
        ></iframe>
      ))}
    </div>
  );
}
