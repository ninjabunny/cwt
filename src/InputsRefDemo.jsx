/* eslint-disable react/display-name */
import { useImperativeHandle, forwardRef, useRef } from "react";

const InputRefsDemo = forwardRef((props, ref) => {
  const privateData = "heres some private data";
  const childRefs = useRef([]);

  useImperativeHandle(ref, () => ({
    getSomePrivateData: () => privateData,
    getRefs: () => childRefs,
  }));

  return (
    <div>
      <h2>useImperativeHandle Demo</h2>
      <input ref={(el) => (childRefs.current[0] = el)} type="text" />
      <input ref={(el) => (childRefs.current[1] = el)} type="text" />
    </div>
  );
});

export default InputRefsDemo;
