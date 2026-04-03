import "./Box.css";

export default function Box(props) {
  return (
    <div className="Box--Container">
      <div
        className="Box--Content"
        onClick={() => (window.location.href = props.link)}
        style={{ backgroundColor: props.bgColor, flexGrow: props.grow }}
      >
        <h3>{props.title}</h3>
        <h1>{props.position}</h1>
        <img src={props.image} alt={props.title} loading="lazy"></img>
      </div>
      <div
        className="Box--Content"
        onClick={() => (window.location.href = props.link2)}
        style={{ backgroundColor: props.bgColor2, flexGrow: props.grow2 }}
      >
        <h3>{props.title2}</h3>
        <h1>{props.position2}</h1>
        <img src={props.image2} alt={props.title2} loading="lazy"></img>
      </div>
    </div>
  );
}
