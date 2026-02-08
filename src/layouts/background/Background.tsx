import background from "./../../assets/bg.jpg";
import "./Background.css"

export default function Background() {
  return (
    <div>
      <img src={background} alt="" className="background-image"   />
    </div>
  );
}
