import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShoppingList from "./ShoppingList";
import Clicker from "./Clicker";
import Toggler from "./Toggler";

const data = [
  { id: 1, item: "卵", quantity: 12, completed: false },
  { id: 2, item: "牛乳", quantity: 1, completed: true },
  { id: 3, item: "さんま", quantity: 4, completed: false },
  { id: 4, item: "納豆", quantity: 2, completed: true },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toggler />
      {/* <Clicker message="こんにちは" buttonText="クリックしてください" /> */}
      {/* <ShoppingList items={data} /> */}
    </>
  );
}

export default App;
