import "./TextBlockStyle.css";

export default function TextBlock(props) {
  return (
    <section>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </section>
  );
}
