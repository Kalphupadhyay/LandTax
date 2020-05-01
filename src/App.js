import React from "react";
import "./index.css";
import Picker from "./Components/Picker";
import { Container } from "react-bootstrap";
const App = (props) => {
  return (
    <div>
      <Container>
        <h1 className="title">Rajasthan land tax calculator</h1>
        <Picker />
      </Container>
    </div>
  );
};

export default App;
