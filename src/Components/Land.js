import React, { useState } from "react";

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

  const clearHandler = () => {
    setTaxable(0);
    setPay(0);
    setArea("");
  };
  return (
    <div>
      <form onSubmit={CalculateHandler}>
        <label>
          Area of land:
          <input type="number" value={area} onChange={inputHandler} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>tax</h1>
      <h1>{taxable}</h1>
      <h1>pay</h1>
      <h1>{Pay}</h1>
    </div>
  );
};

export default Land;
