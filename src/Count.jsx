import React from "react";
import { useAppStore } from "./stores/app-store";
import { shallow } from "zustand/shallow";

const Count = () => {
  //* Cara strict equality (tidak rekomen) cocok untuk satu value
  /*   const count = useAppStore((state) => state.count);
  const decrease = useAppStore((state) => state.decrease);
  const increase = useAppStore((state) => state.e); */

  //* Cara shallow (rekomen) cocok untuk banyak value
  const [count, decrease, increase] = useAppStore((state) => {
    console.log("executed count selector");
    return [state.count, state.decrease, state.increase];
  }, shallow);

  console.log("Render Count");
  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>Count: {count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Count;
