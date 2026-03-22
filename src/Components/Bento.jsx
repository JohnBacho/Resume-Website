import "./BentoStyle.css";

export default function BentoBox(props) {
  return (
    <div className="bento-wrapper">
      <div className="bento-grid">
        <div className="bento-item item-1">
          <img src={props.img1}></img>
        </div>
        <div className="bento-item item-2">
          <img src={props.img2}></img>
        </div>
        <div className="bento-item item-3">
          <img src={props.img3}></img>
        </div>
        <div className="bento-item item-4">
          <img src={props.img4}></img>
        </div>
        <div className="bento-item item-5">
          <img src={props.img5}></img>
        </div>
      </div>
    </div>
  );
}
