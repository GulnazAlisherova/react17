import Range from "./Range"

function App() {
  // const [number, setNumber] = useState(0);

  // function onIncrease() {
  //   localStorage.setItem('number', number + 1);
  //   setNumber(number + 1);
  // }

  // function onDecrease() {
  //   setNumber(number - 1);
  // }
  return (
    <div className="App">
      {/* <button onClick={onIncrease}>+</button>
      {number}
      <button onClick={onDecrease}>-</button> */}
      <Range/>
    </div>
  );
}

export default App;