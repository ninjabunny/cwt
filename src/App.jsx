import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { candyWrapper } from "../CandyWrapper";
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(url);
      const json = await data.json();
      return json;
    };
    getData().then((json) => setData(json));
  }, []);
  console.log(data);
  const RedDivWithCandy = () => candyWrapper(<div>{JSON.stringify(data)}</div>);
  return (
    <>
      <div>
        <RedDivWithCandy />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
