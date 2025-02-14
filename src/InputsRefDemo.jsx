/* eslint-disable react/display-name */
import { useImperativeHandle, forwardRef, useRef } from "react";

const InputRefsDemo = forwardRef((props, ref) => {
  const privateData = "private data";
  const childRefs = useRef([]);

  useImperativeHandle(ref, () => ({
    getSomePrivateData: () => privateData,
    getRefs: () => childRefs,
  }));

  return (
    <div>
      <input ref={(el) => (childRefs.current[0] = el)} type="text" />
      <input value={32} ref={(el) => (childRefs.current[1] = el)} type="text" />
    </div>
  );
});

export default InputRefsDemo;
