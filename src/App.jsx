/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from "react";
import GridExample from "./Grid";
import "./App.css";
import InputRefsDemo from "./InputsRefDemo";
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function App() {
  const inputRefs = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (inputRefs.current) {
      inputRefs.current.getRefs().current[1].focus();
      inputRefs.current.getRefs().current[0].value =
        inputRefs.current.getSomePrivateData();
    }
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Cross Screen Media POC</h1>
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
      <h3>{`${input1}: ${input2}`}</h3>
    </>
  );
};
