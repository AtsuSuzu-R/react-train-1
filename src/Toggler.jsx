import { useState } from "react";

export default function Toggler() {
  const [isFun, setFun] = useState(true);
  const [count, setCount] = useState(0);
  const toggleHappy = () => setFun(!isFun);
  const clickCount = () => setCount(count + 1);
  const zeroCount = () => setCount(0);
  return (
    <>
      <h1 onClick={toggleHappy} className="smile">
        {isFun ? "😢" : "😊"}
      </h1>
      <h2>{count}</h2>
      <button onClick={clickCount}>クリックしてください</button>
      <button onClick={zeroCount}>リセット</button>
    </>
  );
}
