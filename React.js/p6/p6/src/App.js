import "./App.css";

function App() {
  let count = 0;
  const handleClick = () => {
    count++;
    console.log(`clicked `,count,`times`);
  };

  return (
    <div className="App">
      <h1>Event Raising and Handling done Successfully :)</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
