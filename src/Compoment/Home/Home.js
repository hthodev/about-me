import { ContainerLeft } from "../../Container/ContainerLeft";
import { ContainerMiddle } from "../../Container/ContainerMiddle";
import { ContainerRight } from "../../Container/ContainerRight";
import "./Home.scss";

function Home() {
  return (
    <div className="container">
      <div className="heading-left">
        <ContainerLeft />
      </div>
      <div className="heading-middle">
        <ContainerMiddle />
      </div>
      <div className="heading-right">
        <ContainerRight />
      </div>
    </div>
  );
}
export default Home;
