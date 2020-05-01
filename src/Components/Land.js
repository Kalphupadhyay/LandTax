import React, { useState } from "react";
import classes from "./styles.module.css";
import { Form, Button } from "react-bootstrap";

const Land = (props) => {
  const minecat = props.minecat;
  const Category = props.Category;
  const [area, setArea] = useState("");
  const [taxable, setTaxable] = useState(0);
  const [Pay, setPay] = useState(0);
  const inputHandler = (event) => {
    setArea(event.target.value);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const taxableLand = Math.max(0, area - 10000);

  const tax = numberWithCommas(taxableLand);

  const Payable = (Category, taxableLand, minecat) => {
    if (Category === "industrial") {
      return taxableLand * 2;
    } else if (Category === "commercial") {
      return taxableLand * 3;
    } else if (minecat === "lead") {
      return taxableLand * 15;
    } else if (minecat === "copper") {
      return taxableLand * 15;
    } else if (minecat === "rock") {
      return taxableLand * 210;
    } else if (minecat === "cement") {
      return taxableLand * 6;
    } else if (minecat === "major") {
      return taxableLand * 3;
    } else if (minecat === "dolomite") {
      return taxableLand * 2;
    } else if (minecat === "minor") {
      return taxableLand * 0.2;
    } else if (minecat === "" || Category === "") {
      return 0;
    }
  };

  const payableTax = numberWithCommas(Payable(Category, taxableLand, minecat));

  const CalculateHandler = (event) => {
    if (area === "") {
      alert("value can not be zero");
    } else if (area < 10000) {
      alert("no tax");
    } else {
      setTaxable(tax);
      setPay(payableTax);
    }
    event.preventDefault();
  };

  const clearHandler = (event) => {
    setTaxable(0);
    setPay(0);
    setArea("");
    event.preventDefault();
  };
  return (
    <div>
      <div className={classes.cat}>
        <Form style={{ width: "40%" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Area of your Land</Form.Label>
            <Form.Control
              type="number"
              placeholder="Area"
              value={area}
              onChange={inputHandler}
            />
            <Form.Text className="text-muted">
              Value entered is in square feet
            </Form.Text>
          </Form.Group>
          <div className={classes.buttonContainer}>
            <Button variant="success" type="submit" onClick={CalculateHandler}>
              Calculate
            </Button>

            <Button variant="primary" type="submit" onClick={clearHandler}>
              Clear
            </Button>
          </div>
        </Form>
      </div>
      <h1>tax</h1>
      <h1>{taxable}</h1>
      <h1>pay</h1>
      <h1>{Pay}</h1>
    </div>
  );
};

export default Land;
