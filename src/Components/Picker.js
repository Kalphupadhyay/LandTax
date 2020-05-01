import React, { useState } from "react";
import { Form } from "react-bootstrap";
import classes from "./picker.module.css";
import Land from "./Land";
const Picker = () => {
  const [category, setCategory] = useState("industrial");
  const [mine, setMine] = useState("");

  const HandleCat = (event) => {
    setCategory(event.target.value);
  };
  const Handlemine = (event) => {
    setMine(event.target.value);
  };

  return (
    <div style={{ marginTop: 50 }}>
      <div>
        <Form style={{ width: "40%" }}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label style={{ fontSize: 20 }}>
              Select category of Land
            </Form.Label>
            <Form.Control as="select" value={category} onChange={HandleCat}>
              <option value="industrial">Industrial</option>
              <option value="commercial">Commercial</option>
              <option value="mining">Mining</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div
        style={
          category === "mining" ? { display: "flex" } : { display: "none" }
        }
      >
        <Form style={{ width: "40%" }}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select category of Land</Form.Label>
            <Form.Control as="select" value={mine} onChange={Handlemine}>
              <option value="">Select class</option>
              <option value="lead">Lead zinc bearing land</option>
              <option value="copper">copper bearing land</option>
              <option value="rock">Rock phosphatic bearing Lands</option>
              <option value="cement">
                Cement and sms grade limestone bearing land
              </option>
              <option value="major">Other major mineral bearing land</option>
              <option value="dolomite">
                Dolomite,felspar,fuller earth(other than cement & SMS grade
                Limestone)
              </option>
              <option value="minor">Other minor mineral bearing land</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <Land Category={category} minecat={mine} />
    </div>
  );
};

export default Picker;
