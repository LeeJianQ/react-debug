import { useState, useEffect, useRef } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(1)
  // if (count == 1) {
  //   useEffect(() => {
  //     console.log("effect")
  //   }, [])
  // }
  const appRef = useRef()
  useEffect(() => {
    console.log("init")
  }, [])
  const [username, setUsername] = useState("jq")
  return (
    <div className="App" key="app" ref={appRef}>
      <p>this count value is: {count}</p>
      <button onClick={
        () => setCount(count+1)
      }>+1</button>
    </div>
  );
}

export default App;
