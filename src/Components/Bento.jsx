import "./BentoStyle.css";

export default function BentoBox() {
  return (
    <div className="bento-wrapper">
      <div className="bento-grid">
        <div className="bento-item item-1">
          <img src="src/assets/VIBES-Lab/Testing.jpeg"></img>
        </div>
        <div className="bento-item item-2">
          <img src="src/assets/VIBES-Lab/VibesLogo.png"></img>
        </div>
        <div className="bento-item item-3">
          <img src="src/assets/VIBES-Lab/EyeTracking.png"></img>
        </div>
        <div className="bento-item item-4">
          <img src="src/assets/VIBES-Lab/Discussion.jpg"></img>
        </div>
        <div className="bento-item item-5">
          <img src="src/assets/VIBES-Lab/Discussion.jpg"></img>
        </div>
      </div>
    </div>
  );
}
