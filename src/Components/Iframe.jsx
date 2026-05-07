import styles from "./IframeStyle.module.css";

export default function Iframe({ IframeInfo }) {
  return (
    <div className={styles.IframeContainer}>
      {IframeInfo.map((item, index) => (
        <iframe
          key={index}
          src={item.src}
          title={item.title}
          width={item.width ? "auto" : "100%"}
          height={item.height || "700px"}
          style={{
            borderRadius: item.borderRadius || "24px",
            maxHeight: item.maxHeight || "100%",
          }}
        ></iframe>
      ))}
    </div>
  );
}
