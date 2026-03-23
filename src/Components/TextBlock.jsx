import "./TextBlockStyle.css";

export default function TextBlock(props) {
  return (
    <section className="TextBlock" style={{ paddingTop: props.PaddingTop || "70px" }}>
      {" "}
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </section>
  );
}
