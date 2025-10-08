function handleClick() {
  console.log("クリックされた！");
}

export default function Clicker({ message, buttonText }) {
  const handleAlert = () => alert(message);

  return (
    <>
      <button onClick={() => alert(message)}>{buttonText} </button>
      <button onClick={handleAlert}>{buttonText} </button>
      <p>クリックして～～</p>
      <button onClick={handleClick}>クリック</button>
    </>
  );
}
