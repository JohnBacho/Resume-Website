import "./ProjectBoxes.css";

export default function Box({ props }) {
  return (
    <div className="Box--Container ProjectBoxs">
      {props.map((item, index) => (
        <div
          key={index}
          className="Box--Content"
          onClick={() => (window.location.href = item.link)}
        >
          <h3>{item.title}</h3>
          <h1>{item.project}</h1>
          <img src={item.image} alt={item.title}></img>
        </div>
      ))}
    </div>
  );
}
