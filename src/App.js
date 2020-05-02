import React from "react";
import "./index.css";
import Picker from "./Components/Picker";
const App = (props) => {
  return (
    <section className="background">
      <div className="container-lg " style={{ marginTop: 20 }}>
        <h1 className="title">Rajasthan land tax calculator</h1>
        <Picker />
      </div>
    </section>
  );
};

export default App;
