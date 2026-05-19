import styles from "./IframeStyle.module.css";

export default function Iframe({ IframeInfo }) {
  return (
    <>
      {IframeInfo.title ? <h1 className={styles.IframeTitle}>{IframeInfo.title}</h1> : null}
      <div className={styles.IframeContainer}>
        <iframe
          src={IframeInfo.src}
          title={IframeInfo.title}
          width={IframeInfo.width ? "auto" : "100%"}
          height={IframeInfo.height || "700px"}
          style={{
            borderRadius: IframeInfo.borderRadius || "24px",
            maxHeight: IframeInfo.maxHeight || "100%",
          }}
        ></iframe>
      </div>
    </>
  );
}
