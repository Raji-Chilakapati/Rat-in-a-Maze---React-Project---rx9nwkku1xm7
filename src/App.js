import { useContext } from "react";

import "./css/components/Components.css";

import { DataContext } from "./js/component/context/data-contex";
import Problem from "./js/component/Problem";
import Solution from "./js/component/Solution";

function App() {
  const { arr, size } = useContext(DataContext);
  return (
    <div className="container">
      <div className="problem-container">
        <h3>Initial Maze</h3>
        <Problem arr={arr} size={size} />
      </div>
      <>
        <Solution />
      </>
    </div>
  );
}

export default App;
