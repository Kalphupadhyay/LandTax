import React, { useContext, useState } from "react";
import { LandContext } from "./Land";
import classes from "./styles.module.css";
import { Button } from "react-bootstrap";
const FinalTax = (props) => {
  const [yeartax, setYeartax] = useState(0);
  const [monthTax, setMonthTax] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const { payableTax } = useContext(LandContext);
  const Numberofdays = props.days;

  const YearTaxCalc = (PayableTax, Numberofdays) => {
    const dayIntrest = PayableTax * (12 / 100) * 1;
    const Final = (Numberofdays / 365) * dayIntrest;

    return Final;
  };
  const MonthTaxCalc = (PayableTax, Numberofdays) => {
    const dayIntrest = PayableTax * (12 / 100) * 1;
    const Final = (dayIntrest / 30) * Numberofdays;
    return Final;
  };

  const MonthTax = MonthTaxCalc(payableTax, Numberofdays).toFixed();
  const YearTax = YearTaxCalc(payableTax, Numberofdays).toFixed();
  const TotalTax = Math.floor(MonthTax) + Math.floor(YearTax) + payableTax;

  const TaxHandler = (payableTax) => {
    if (payableTax === 0) {
      alert("please calculate payable tax first");
    } else {
      setYeartax(YearTax);
      setMonthTax(MonthTax);
      setTotalTax(TotalTax);
    }
  };
  const clearTaxHandler = () => {
    setYeartax(0);
    setMonthTax(0);
    setTotalTax(0);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const displayIntrest = numberWithCommas(yeartax);
  const Penalty = numberWithCommas(monthTax);
  const displayTax = numberWithCommas(totalTax);

  return (
    <div>
      <div className={classes.yearTax}>
        <Button
          variant="success"
          className={classes.btn}
          type="submit"
          onClick={() => {
            TaxHandler(payableTax);
          }}
        >
          Calculate Total Tax
        </Button>
        <div style={{ marginLeft: 10 }}>
          <Button
            type="clear"
            className={classes.btn}
            onClick={clearTaxHandler}
          >
            clear
          </Button>
        </div>
      </div>
      <div className={classes.final}>
        <div className={classes.box}>
          <div>
            <h3>interest: {displayIntrest} ₹</h3>
            <h3>Penalty: {Penalty} ₹</h3>
            <h3>Total : {displayTax} ₹</h3>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright: Kalph upadhyay
      </div>
    </div>
  );
};

export default FinalTax;
