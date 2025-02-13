import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GridExample from "./Grid";
import "./App.css";
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

  return (
    <>
      <h1>Cross Screen Media POC</h1>
      <div
        className="ag-theme-alpine"
        style={{
          height: "400px",
        }}
      >
        <GridExample />
      </div>
    </>
  );
}

export default App;
