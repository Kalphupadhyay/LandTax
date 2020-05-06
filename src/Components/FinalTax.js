import React, { useContext, useState } from "react";
import { LandContext } from "./Land";
import classes from "./styles.module.css";
import { Button } from "react-bootstrap";
const FinalTax = (props) => {
  const [yeartax, setYeartax] = useState(0);
  const [monthTax, setMonthTax] = useState(0);
  const { payableTax } = useContext(LandContext);

  const Numberofdays = props.days;
  const YearTaxCalc = (PayableTax, Numberofdays) => {
    const dayIntrest = PayableTax * (12 / 100) * 1;
    const Final = dayIntrest * (Numberofdays / 365);
    return Final;
  };
  const MonthTaxCalc = (PayableTax, Numberofdays) => {
    const dayIntrest = PayableTax * (12 / 100) * 1;
    const Final = dayIntrest * (Numberofdays / 30);
    return Final;
  };
  const MonthTax = MonthTaxCalc(payableTax, Numberofdays).toFixed();
  const YearTax = YearTaxCalc(payableTax, Numberofdays).toFixed();

  const TaxHandler = (payableTax) => {
    if (payableTax === 0) {
      alert("please calculate payable tax first");
    } else {
      setYeartax(YearTax);
      setMonthTax(MonthTax);
    }
  };
  const clearTaxHandler = () => {
    setYeartax(0);
    setMonthTax(0);
  };

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
          Calculate total tax
        </Button>
        <div>
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
            <h3>yearly tax:{yeartax}</h3>
            <h3>Month tax:{monthTax}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalTax;
