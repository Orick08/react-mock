import { Card } from "./components/card";

const imgHeader = new URL("./images/illustration-hero.svg", import.meta.url);
const header = "Order summary";
const description = "You can now listen to millions of songs, audiobooks, and podcast on any device anywhere you like!";

export function App() {
  return (
    <Card image={imgHeader} header={header} content={description} />
    // <img src={imgHeader} alt="logo" />
  );
}