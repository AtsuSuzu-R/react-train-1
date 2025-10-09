import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css";

export default function ({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }
  return (
    <>
      <div className="gridColor">{boxes}</div>
    </>
  );
}
