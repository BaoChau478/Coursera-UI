import background from "../../assets/bg.jpg";
import "./Background.css";

export default function Background() {
  return (
    <section className="background-section">
      <img src={background} alt="" className="background-image" />
    </section>
  );
}
