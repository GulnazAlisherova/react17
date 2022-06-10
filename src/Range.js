function Range() {
  const styles = {
    width: "200px",
    height: "200px",
    backgroundColor: "tomato",
  }
  return (
    <div className="Range">
      <div style={{ marginBottom: "100px" }}>
        <input type="range" min="0" max="360" />
      </div>
      <div style={styles}></div>
    </div>
  );
}

export default Range;