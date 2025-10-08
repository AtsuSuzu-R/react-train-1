import { useState } from "react";
import "./ColorBox.css";

function randomColor(arr) {
  const num = Math.floor(Math.random() * arr.length);
  return arr[num];
}

export default function ColorBox({ colors }) {
  const [colornum, setColor] = useState(randomColor(colors));
  const changeColor = () => {
    const randomColor1 = randomColor(colors);
    setColor(randomColor1);
  };

  return (
    <>
      <div
        className="ColorBox"
        style={{ backgroundColor: colornum }}
        onClick={changeColor}
      ></div>
    </>
  );
}
