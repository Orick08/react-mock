import { Card } from "./components/card";
import { PlanMini } from "./components/plan-mini";

const imgHeader = new URL("./images/illustration-hero.svg", import.meta.url);
const iconPlan = new URL("./images/icon-music.svg", import.meta.url);
const header = "Order summary";
const description = (
  <div>
    <p>You can now listen to millions of songs, audiobooks, and podcast on any device anywhere you like!</p>
    <PlanMini icon={iconPlan} name={"Annual Plan"} price="$59.99/year" />
  </div>
);

const buttons = (
  <div>
    <button>Procced to payment</button>
    <br />
    <button>Cancel order</button>
  </div>
);

export function App() {
  return (
    <Card image={imgHeader} header={header} content={description} footer={buttons} />
    // <img src={imgHeader} alt="logo" />
  );
}