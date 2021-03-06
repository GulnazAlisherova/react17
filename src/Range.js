import { useState } from "react";

//rotate scew scale border-radius todolist->localstorage
function Range() {
  const [angle, setAngle] = useState(100);
  function onAngleChange ({ target }) {
    setAngle(+target.value);
  }

  const styles = {
    width: "200px",
    height: "200px",
    backgroundColor: "lightgreen",
    transform: `rotate(${angle}deg)`,
    transition: '1.5s all ease-in',
  }
  return (
    <div className="Range">
      <div style={{ marginBottom: "100px" }}>
        <input type="range" min="0" max="360"  value={angle} onChange={onAngleChange} />
      </div>
      <div style={styles}></div>
    </div>
  );
}

export default Range;