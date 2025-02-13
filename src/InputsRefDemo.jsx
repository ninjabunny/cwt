/* eslint-disable react/display-name */
import { useImperativeHandle, forwardRef, useRef } from "react";

const InputRefsDemo = forwardRef((props, ref) => {
  const data = "heres some data";
  const childRefs = useRef([]);

  useImperativeHandle(ref, () => ({
    getSomeData: () => data,
    getRefs: () => childRefs,
  }));

  return (
    <div>
      <input ref={(el) => (childRefs.current[0] = el)} type="text" />
      <input ref={(el) => (childRefs.current[1] = el)} type="text" />
    </div>
  );
});

export default InputRefsDemo;
