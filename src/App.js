import React from "react";
import "./index.css";
import Picker from "./Components/Picker";
const App = (props) => {
  return (
    <div className="container-lg">
      <h1 className="title">Rajasthan land tax calculator</h1>
      <Picker />
    </div>
  );
};

export default App;
