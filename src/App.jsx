import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShoppingList from "./ShoppingList";
import Clicker from "./Clicker";
import Toggler from "./Toggler";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

const colors = [
  "#009284ff",
  "#00880bff",
  "#928400ff",
  "#0c9200ff",
  "#002292ff",
  "#5d0092ff",
  "#920086ff",
  "#920066ff",
  "#920018ff",
  "#229200ff",
  "#920a00ff",
  "#009284ff",
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ColorBoxGrid colors={colors} />
    </>
  );
}

export default App;
