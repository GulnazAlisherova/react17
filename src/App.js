import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(function () {
    localStorage.getItem('name');
  }, []); // -> empty array.

  function onNameChange({ target }) {
    localStorage.setItem('name', target.value);
    setName(target.value);
  }

  function onNameClear() {
    localStorage.removeItem('name')
    setName("");
  }

  return (
    <div className="App">
      <input type="text" value={name}
        placeholder="Your name"
        onChange={onNameChange} />
      <span>Your name is {name}</span>
      <button onClick={onNameClear}>Clear</button>
    </div>
  );
}
export default App;