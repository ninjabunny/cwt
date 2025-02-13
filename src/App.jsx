import { useState, useEffect, useRef } from "react";
import GridExample from "./Grid";
import "./App.css";
import InputRefsDemo from "./InputsRefDemo";
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function App() {
  // const [data, setData] = useState({});
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current.getRefs().current[1].focus();
    inputRefs.current.getRefs().current[0].value =
      inputRefs.current.getSomePrivateData();
    console.log("ref", inputRefs);
  }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetch(url);
  //     const json = await data.json();
  //     return json;
  //   };
  //   getData().then((json) => setData(json));
  // }, []);
  // console.log(data);

  return (
    <>
      <h1>Cross Screen Media POC</h1>
      <div
        style={{
          height: "400px",
          width: "1200px",
        }}
      >
        <GridExample />
      </div>
      <InputRefsDemo ref={inputRefs} />
    </>
  );
}

export default App;
