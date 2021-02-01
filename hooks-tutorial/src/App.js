import React from "react";
import Info from "./Info";
import CounterUseState from "./CounterUseState";
import Counter from "./Counter";
import Average from "./Average";

const App = () => {
  return (
    <div>
      <Info />
      <Counter />
      <CounterUseState />
      <Average />
    </div>
  );
};

export default App;
