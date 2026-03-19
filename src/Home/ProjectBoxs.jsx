import "./ProjectBox.css";

export default function Box(props) {
  return (
    <div className="Box--Container ProjectBoxs">
      <div
        className="Box--Content"
        onClick={() => (window.location.href = "https://www.example.com")}
      >
        <h3>{props.title}</h3>
        <h1>{props.project}</h1>
        <img src={props.image} alt={props.title}></img>
      </div>
      <div
        className="Box--Content"
        onClick={() => (window.location.href = "https://www.example.com")}
      >
        <h3>{props.title2}</h3>
        <h1>{props.project2}</h1>
        <img src={props.image2} alt={props.title2}></img>
      </div>
      <div
        className="Box--Content"
        onClick={() => (window.location.href = "https://www.example.com")}
      >
        <h3>{props.title3}</h3>
        <h1>{props.project3}</h1>
        <img src={props.image3} alt={props.title3}></img>
      </div>
    </div>
  );
}
