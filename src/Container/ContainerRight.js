import "react-dropdown/style.css";
import Languages from "../Compoment/Home/Languages";
import "./ContainerRight.scss";

export function ContainerRight() {
  const language = ["🇻🇳", "🇺🇸"];
  return (
    <div className="right-container">
      <div className="languagues">
        <Languages />
      </div>
      <div className="day-time"></div>
      <div className="social">
        <div className="gg">gg</div>
        <div className="fb"></div>
        <div className="tw"></div>
      </div>
    </div>
  );
}
