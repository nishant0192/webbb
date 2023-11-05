import "./App.css";
import React,{useState} from "react"

function App() {
  const [count, setcount] = useState(0)

  return (
    <div className="App">
      <h1>Used UseState Hook Successfully :)</h1>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
