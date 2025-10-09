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
  "#283d2aff",
  "#fff06aff",
  "#2a8063ff",
  "#314ba1ff",
  "#733299ff",
  "#ac43a3ff",
  "#f06e9fff",
  "#8cd5e7ff",
  "#69ff3cff",
  "#ec665cff",
  "#00ffe5ff",
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
