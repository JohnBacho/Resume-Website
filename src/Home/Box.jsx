import "./Box.css";

export default function Box(props) {
  return (
    <div className="Box--Container">
      <div
        className="Box--Content"
        onClick={() => (window.location.href = "https://www.example.com")}
        style={{ backgroundColor: props.bgColor, flexGrow: props.grow }}
      >
        <h3>{props.title}</h3>
        <h1>{props.position}</h1>
        <img src={props.image} alt={props.title}></img>
      </div>
      <div
        className="Box--Content"
        onClick={() => (window.location.href = "https://www.example.com")}
        style={{ backgroundColor: props.bgColor2, flexGrow: props.grow2 }}
      >
        <h3>{props.title2}</h3>
        <h1>{props.position2}</h1>
        <img src={props.image2} alt={props.title2}></img>
      </div>
    </div>
  );
}
