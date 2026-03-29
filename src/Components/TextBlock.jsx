import styled from "./TextBlockStyle.module.css";

export default function TextBlock({Text}) {
  return (
    <>
    {Text.map((item, index) => (
      <section
        key={index}
        className={styled.TextBlock}
        style={{ paddingTop: item.PaddingTop || "70px" }}
      >
        {" "}
        <h1>{item.title}</h1>
        <p>{item.body}</p>
      </section>
    ))}
    </>
  );
}
