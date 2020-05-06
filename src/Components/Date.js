import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FinalTax from "./FinalTax";
import classes from "./styles.module.css";

const DateSelect = (props) => {
  const [date, setDate] = useState(new Date());
  const [payDate, setPayDate] = useState(new Date());

  const dateChangeHandler = (date) => {
    setDate(date);
  };
  const payChangeHandler = (date) => {
    setPayDate(date);
  };

  const initalAllotmentDate = new Date(1590992147138);

  const allotmentDateCalc = (initalAllotmentDate, date) => {
    if (date < initalAllotmentDate) {
      return initalAllotmentDate;
    } else if (date > initalAllotmentDate) {
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 2, 0);
      return lastDay;
    }
  };
  const allotmentDate = allotmentDateCalc(initalAllotmentDate, date);

  const NumberOfDaysCalc = (payDate, allotmentDate) => {
    if (payDate < allotmentDate) {
      return 0;
    } else if (payDate > allotmentDate) {
      var Difference_In_Time = payDate.getTime() - allotmentDate.getTime();
      const Days = Difference_In_Time / (1000 * 3600 * 24) - 1;
      return Days;
    }
  };
  const NumberOfDays = NumberOfDaysCalc(payDate, allotmentDate);

  return (
    <div>
      <div className={classes.DateContainer}>
        <div className={classes.allotContainer}>
          <h3>Enter Allotment Date</h3>
          <div className={classes.allot}>
            <DatePicker selected={date} onChange={dateChangeHandler} />
          </div>
          <div style={{ marginTop: 10 }}>{date.toDateString()}</div>
        </div>
        <div className={classes.payContainer}>
          <h3>Enter Payment Date </h3>
          <div className={classes.pay}>
            <DatePicker selected={payDate} onChange={payChangeHandler} />
          </div>
          <div style={{ marginTop: 10 }}>{payDate.toDateString()}</div>
        </div>
      </div>
      <FinalTax days={NumberOfDays} />
    </div>
  );
};

export default DateSelect;
