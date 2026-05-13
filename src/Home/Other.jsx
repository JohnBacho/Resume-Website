import "./Other.css";

export default function InProgress({props}) {
  return (
    <div className="InProgress">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}
