/* eslint-disable react/prop-types */
//TODO: 1. add widget + maybe react testing library
//TODO: 2. add async await code
//TODO: 3. What is advantage of reactDOM and react over other libraries
//TODO: 4. how to position a modal?

import { useState, useEffect, useRef } from "react";
import GridExample from "./Grid";
import "./App.css";
import InputRefsDemo from "./InputsRefDemo";
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function App() {
  const inputRefs = useRef(null);

  useEffect(() => {
    if (inputRefs.current) {
      inputRefs.current.getRefs().current[1].focus();
      inputRefs.current.getRefs().current[0].value =
        inputRefs.current.getSomePrivateData();
      console.log("ref", inputRefs);
    }
  }, []);

  return (
    <>
      <h1>Cross Screen Media POC</h1>
      <div>
        <h2>Complex Tables Demo</h2>
        <GridExample />
      </div>
      <div>
        <h2>useImperativeHandle Demo</h2>
        <InputRefsDemo ref={inputRefs} />
        <FancyWidget
          input1={
            inputRefs.current
              ? inputRefs.current.getRefs().current[0].value
              : ""
          }
          input2={
            inputRefs.current
              ? inputRefs.current.getRefs().current[1].value
              : ""
          }
        />
      </div>
    </>
  );
}

export default App;

const FancyWidget = ({ input1 = "", input2 = "" }) => {
  return (
    <>
      <h2>Fancy Widget:</h2>
      <h3
        style={{ margin: "40px", fontSize: "20px" }}
      >{`${input1}: ${input2}`}</h3>
    </>
  );
};
