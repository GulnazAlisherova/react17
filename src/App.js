import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  useEffect(function () {
    setName(localStorage.getItem('name'));
  }, []);

    setName(localStorage.getItem('name'));

  function onNameChange({ target }) {
    //create/update
    localStorage.setItem('name', target.value);
    setName(target.name);
  }

  function onNameClear() {
    //delete
    localStorage.removeItem('name');
    setName("");
  }
  return (
    <div className="App">
      <input type="text"
        value={name}
        placeholder="Your name"
        onChange={onNameChange}
      />
      <span>Your name is {name}</span>
      <button onClick={onNameClear}>Clear</button>
    </div>
  );
}

export default App;
