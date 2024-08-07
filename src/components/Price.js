import React from "react";
import "./Price.css";
import { useEffect, useState } from "react";
import axios from "axios";
function Price(props) {
  const [currency, setcurrency] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/13be849f0117ade89e147996/latest/USD"
      )
      .then((res) => setcurrency(res.data.conversion_rates));
  }, []);
  return (
    <div className="component">
      <div className="valuecontainer">
        <div className="value">{currency[props.currentCurrency]}</div>
        <div className="currency">{props.currentCurrency}</div>
      </div>
      <div className="change">+2,161.42 (3.54%)</div>
    </div>
  );
}
export default Price;
